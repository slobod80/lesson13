<template lang ="pug">
  div.main
    div.in_main
      p Календарь задач
        br
        br
        div.month 
          button(@click="decMonth") -
          span {{month[currentMonth]}}  
          button(@click="incMonth") +
        br
        div.month 
          button(@click="decYear") -
          span {{currentYear}}
          button(@click="incYear") +
        br
        br
        br
        table(style="width:100%")
        tr
          td(style="width:100px" v-for="(item,index) in days" :key="index") {{  days[index]  }}
        tr
        tr(v-for="index in 5")
          td(v-for="index1 in 7" v-bind:class="{ 'date': dayArray[index1+7*(index-1)]!=' '} ")  {{  (dayArray[index1+7*(index-1)])  }}
            div.task(v-for="(item2,index2) in myTask" :key="myTask[index2].id")
              p.status(v-if="myTask[index2].dateTask==dayArray[index1+7*(index-1)]"
                @click="editTask(myTask[index2].id)") {{  myTask[index2].nameOfTask  }}

    taskDetails(
            :lookTaskDetails="lookTaskDetails"
            v-if="lookTaskDetails"
            :idTask="idTask"
            @closeDetails="closeDetails")

</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import tasksname from "../../store/modules/tasks"
import {Itask} from "../menu-components/types/task"
import taskDetails from "../menu-components/taskdetails.vue"
import axios from "axios"
import api from "../../service/api"

@Component({
  components: {
    taskDetails
  }
})

export default class calendar extends Vue 
{
  myTask:Itask[]=[];
  month: string[] = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябь","Октябрь","Ноябрь","Декабрь"];
  days: String[]=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"]
  currentMonth: number = 0;
  currentYear:number = 2020;
  dayArray:string[]=[];
  moment=require("moment");
  daysInMonth:number=0;
  currentDate:string="";
  startDay:number=0;
  idTask:number=0;
  lookTaskDetails:boolean=false;

  closeDetails():void {
    this.lookTaskDetails=false;
  }

  editTask(id:number):void {
    this.idTask=id;
    this.lookTaskDetails=true;
  }

  incYear():void {
    this.currentYear++;

  }

  decYear():void {
    this.currentYear--;

  }

  incMonth():void {
    this.currentMonth++;
    if (this.currentMonth>11) this.currentMonth=0;

  }

  created() :void {
    const promise=api.getTasks()
    .then(response=>{
      this.myTask=response;
    });
  }

  mounted():void {
    if (localStorage.currentMonth) this.currentMonth=localStorage.currentMonth;
    if (localStorage.currentYear) this.currentYear=localStorage.currentYear;
    
  }

  decMonth():void {
    this.currentMonth--;
    if (this.currentMonth<0) this.currentMonth=11;

  }

  @Watch('currentMonth')
  onCurrentMonthChanged(val: string, oldVal: string) {
    localStorage.currentMonth=val;
    this.calcArr();
  }

  @Watch('currentYear')
  onCurrentYearChanged(val: string, oldVal: string) {
    localStorage.currentYear=val;
    this.calcArr();
  }  

  calcArr():void {

    this.dayArray=[];
    let i:number=0;

    this.currentDate=this.moment(this.currentYear.toString()+(this.currentMonth).toString(),"YYYY-MM").add(1,'month').format("YYYY-MM-DD");
    if (this.currentMonth==0) this.currentDate=this.moment(this.currentYear.toString()+(this.currentMonth+1).toString(),"YYYY-MM").format("YYYY-MM-DD");

    this.daysInMonth=this.moment(this.currentDate,"YYYY-MM-DD").daysInMonth();

    this.startDay=this.moment(this.currentDate,"YYYY-MM").day();

    for (i=0; i<=this.daysInMonth+this.startDay;i++) {
      if (i<=this.startDay) 
        if (i==this.startDay && i==0) this.dayArray.push(  this.moment(this.currentDate).format("YYYY-MM-DD")   );
        else this.dayArray.push(" ");
      else 
      {
        if (i-this.startDay<this.daysInMonth+1) {
          this.dayArray.push(  this.moment(this.currentDate).format("YYYY-MM-DD")   );
          this.currentDate=this.moment(this.currentDate).add(1,'day').format("YYYY-MM-DD");

          }
        else this.dayArray.push(" ");
      } 
    }
  }

 

}




</script>

<style scoped>

.month {
  width: 120px;
  display:flex;
  justify-content:space-between;
}

.status:hover {
  background-color: #EAEAEA;
}

.task {
  font-size:10px;
  color:blue;
}

.date {
  width:80px;
  height:70px;
}

.in_main {
  height:550px; 
}
</style>
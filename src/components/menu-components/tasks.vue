<template lang ="pug">
.wrapper
  .main
    .in_main
      .flex-task
        .flex-task-container
          transition-group( name="item" @after-enter="enter")
            tr(v-for="(item,index) in myTask" :key="myTask[index].id"
              v-if=" index<idx "              
              v-bind:class="[index==indexOfNewTask-1 && isNewTask ? 'new-task' : '']")
              td.status(style="width:20%" @click="editTask(index)") {{myTask[index].nameOfTask}}
              td(style="width:45%") {{myTask[index].myTask}}
              td(style="width:18%") {{myTask[index].dateTask | dateTask}}
              td.status(style="width:15%" @click="changeStatusOfTask(index)") {{myTask[index].status}}
              button(type="button" @click="deleteTask(myTask[index].id)") X
        button(type="submit" 
          @click="addTask1") Добавить задачу
        addTaskModal(
            :activeModalAddTask="activeModalAddTask"
            v-if="activeModalAddTask"
            @closeModal="closeModal"
            @addTask="addTask")
        taskDetailsModal(
            :activeModalDetails="activeModalDetails"
            v-if="activeModalDetails"
            :idTask="idTask"
            :myTask="myTask"
            @closeModalDetails="closeModalDetails")
</template>

<script lang="ts">
import { Component, Prop, Vue ,Watch} from "vue-property-decorator";
import {Itask} from "../../components/menu-components/types/task";
import addTaskModal from "../../components/addtaskmodal.vue";
import taskDetailsModal from "../../components/taskdetailsmodal.vue";
import tasksname from "../../store/modules/tasks"
import api from "../../service/api"

@Component({
  components: {
    addTaskModal,
    taskDetailsModal
  }
})
export default class tasks extends Vue 
{
//  @Prop() myTask!:Itask[];

  moment=require("moment");
  myTask:Itask[]=[];
  idx:number=0;
  indexOfNewTask:number=0;
  isNewTask:boolean=false;
  idTask:number=0;
  inputTask:string="";
  activeModalAddTask:boolean=false;
  activeModalDetails:boolean=false;

  editTask(index:number):void {
    this.idTask=index;
    this.inputTask=this.myTask[index].myTask;
    this.activeModalDetails=true;
  }

  changeStatusOfTask(index:number):void {
//    this.$emit("onChangeStatusOfTask",index);
  //tasksname.changeStatus(index);

  }

  addTask1():void {
    this.activeModalAddTask=true;
  }

  closeModal():void {
   this.activeModalAddTask=false; 
  }

  closeModalDetails():void {
    this.activeModalDetails=false;  
  }

  addTask(nameOfTask:string,inputTask:string,inputDate:string):void {
//      this.$emit("onAddTask",[nameOfTask,inputTask,inputDate]);     
//      this.$emit("incOpenTasks");
    //tasksname.addTask([nameOfTask,inputTask,inputDate]);
    this.indexOfNewTask++;
    this.isNewTask=true;
  }

  deleteTask(index:number):void {
//    this.$emit("onDeleteTask",index);
//    this.$emit("decOpenTasks");
    //tasksname.deleteTask(index);
    this.indexOfNewTask--;
    this.isNewTask=false;
    api.deleteTask(index);
  }

  created():void {   
    const promise=api.getTasks()
    .then(response=>{
      this.myTask=response;
      this.intervalFetchData();
    });

  }

/*updated():void {
    const promise=api.getTasks()
    .then(response=>{
      this.myTask=response;
    });
}*/


        intervalFetchData():void {
            setInterval(() => {    

    const promise=api.getTasks()
    .then(response=>{
      this.myTask=response;
      this.intervalFetchData();
    });              


                }, 50000);}


  mounted():void 
  {
    this.run();
  }  

  enter():void 
  {
    this.idx=this.idx+1;
  }

  run():void 
  {
    this.idx=1;
  }

}
</script>

<style scoped>

.new-task {
  animation-name: blinker;
  animation-iteration-count: 3;
  animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  animation-duration: 1s;
}

@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
  animation-duration:2s;
}


.old-task {
  color: black;
}

.item-enter-active,
.item-leave-active {
  transition: font-size .3s;
}
  
.item-enter,
.item-leave-to {
  font-size: 20px;
}

.flex-task-container {
  height:200px;
  overflow-y: auto;
}

.flex-task {
  display: flex;
  flex-direction: column;
}

.main-task {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
td.status:hover {
  background-color: #EAEAEA;
}
</style>
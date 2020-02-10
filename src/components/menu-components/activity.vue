<template lang ="pug">
.wrapper
  div.main
    div.in_main
        p.today {{dialogdata}} 
        table.table2
              tr(v-for="(item,index) in dialog" :key="index.id")
                td.table_td_1
                  img(v-bind:src="require('@/assets/'+item.icon_photo)" alt="")
                td.table_td_2 {{dialog[index].log}}
                td.table_td_3 {{dialog[index].time}}           
        div.photo-flex
        img.photo-flex1(v-for="(item,index) in photo" :key="index.id",v-bind:src="require('@/assets/'+item)",@click="click2(index)" alt="")
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Idialog} from "../../components/menu-components/types/dialog"
import activityname from "../../store/modules/activity"

@Component

export default class activity extends Vue 
{

  photo:string[]=[];
  dialogdata:string="";
  dialog:Idialog[]=[]


mounted():void {
  this.photo=activityname.photo;
  this.dialogdata=activityname.dialogdata;
  this.dialog=activityname.dialog;
}

  click2(index:number):void
    {     
      this.$emit("onDialog",index);
    }

  }
</script>

<style scoped>

.dnt{
  text-align:center;
  width:100%;
  background-color:red;
}
.table2{
  margin-left:45px;
}
.table_td_1{
  width:13px;
  padding-top:10px;
  padding-right:1px;
}

.table_td_2{
  width:72%;
  padding-left:45px;
}
.table_td_3{
  font-size:12px;
}

.today {
  padding-top: 35px;
  padding-left: 30px;
  padding-bottom:25px;
  font-size: 14px;
  opacity: 0.5; 
}


td {
  height: 80px;
}


.table1 {
  width: 80%;
  margin-top: 30px;
  margin-left: 30px;
  font-size: 16px;
}


.table_cell {
  background: #F7F6F3;
  padding-left: 40px;
  font-size: 15px;  
}


.ccc {
  text-align: center;
  width: 40px;
  height: 40px;
  background: #CEF9C6;
  border-radius: 35px;  
  margin-right: 30px;
}


.ccc1 {
  text-align: center;
  width: 40px;
  height: 40px;
  background: #FFF8DD;
  border-radius: 35px;  
}


.ccc2 {
  text-align: center;
  width: 40px;
  height: 40px;
  background: #E3EFFF;
  border-radius: 35px;  
}


.ccc2::before {
  content: "";
  background-image: url("/assets/icon3.png");
  width: 12px;
  height: 12px;
  background-size: cover;
  position: absolute; 
  transform: translate(-5px,12px);
}


.ccc::before {
  content: url("/assets/Icon@3x.svg");
  margin-top: 10px;
  margin-left: -4px;
  position: absolute; 
}


.ccc1::before {
  width: 12px;
  height: 11px;
  content: url("/assets/icon2.svg");
  margin-top: 10px;
  margin-left: -4px;
  position: absolute;
}


.photo-flex {
  display: inline-flex;
  justify-content: flex-start;
  margin-left: 70px;
  margin-bottom: 50px;
  margin-top:50px;
}


.photo-flex1{
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 80px;
}


.poin {
  cursor: pointer;
}


/*********************************/
@media (max-width: 1024px)
{
.in_main {
  width: 500px; 
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px; 
}

.today {
  font-size: 16px;
  opacity: 0.5; 
  margin: 30px 0 0 30px;
}

td {
  height: 80px;
}


table {
  width: 80%;
  margin-top: 10px;
  margin-left: 30px;
  font-size: 16px;
}


.photo-flex {
  display: inline-flex;
  justify-content: center;
  margin-left: 30px;
}

}
</style>
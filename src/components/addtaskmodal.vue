<template lang ="pug">
      .modal(v-if="activeModalAddTask")
        .modal-background
          .modal-content 
            p Введите задачу
            input(v-model.trim="nameOfTask" placeholder="Имя задачи")
            input(v-model.trim="inputTask" placeholder="Задача")
            input(type="date" v-model.trim="inputDate")
            button(type="submit" @click="addTask") Добавить задачу
            button(@click="closeModal") Закрыть окно
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import {Itask} from "./menu-components/types/task";
import axios from "axios";
import api from "../service/api"

@Component

export default class addTaskModal extends Vue 
{
//  @Prop() myTask!:Itask[];
  @Prop() activeModalAddTask!:boolean;

  nameOfTask:string="";
  inputTask:string="";
  inputDate:string="";
  moment=require("moment");
  myTask!:Itask;


  closeModal():void {
    this.$emit("closeModal")
  }

  addTask():void {  
    this.moment().locale("ru");
    if (this.nameOfTask!="" && this.inputTask!="" && this.inputDate!="")
    {
      //this.$emit("addTask",this.nameOfTask,this.inputTask,this.inputDate);
      //this.myTask[].push(  {id:7,nameOfTask:this.nameOfTask,myTask:this.inputTask,dateTask:this.inputDate,status:"to do"}  );
      //alert(this.myTask);
      api.addTask(Math.floor(Math.random() * Math.floor(10000)),this.nameOfTask,this.inputTask,this.inputDate);
      this.$emit("closeModal");     
      this.nameOfTask="";
      this.inputTask="";
      this.inputDate="";     
    }
    else alert ("Нельзя вводить пустые задачи !");
  }



}
</script>

<style scoped>


.modal {
  overflow: hidden;
  position:fixed;
  display:none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(10,10,10,0.7);
}
.modal-background {
  overflow: hidden;
  z-index: 9997;
}

.modal-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding:5em;
  background-color: white;
  z-index: 9998;
}

</style>
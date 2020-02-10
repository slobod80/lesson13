t<template lang ="pug">
      .modal(v-if="lookTaskDetails")
        .modal-background
          .modal-content 
            p Название задачи: {{  nameOfTask  }}
            p Описание задачи: {{  inputTask  }}
            p Дата окончания: {{  inputDate  }}
            p Статус: {{  statusOfTask  }}
            br
            button(@click="closeModal") Закрыть
</template> 

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import {Itask} from "./types/task";
import {statusOfTask} from "./types/statusoftask"
import tasksname from "../../store/modules/tasks"


@Component

export default class taskDetails extends Vue 
{
  @Prop() lookTaskDetails!:boolean;
  @Prop() idTask!:number;

  myTask:Itask[]=[];

  nameOfTask:string="";
  inputDate:string="";
  inputTask:string="";
  statusOfTask:string="";
  moment=require("moment");

  closeModal():void {
	this.$emit("closeDetails");
  }

  mounted():void {
	this.myTask=tasksname.myTask;
	this.nameOfTask=this.myTask[this.idTask].nameOfTask;
	this.inputTask=this.myTask[this.idTask].myTask;
	this.inputDate=this.myTask[this.idTask].dateTask;
	this.statusOfTask=this.myTask[this.idTask].status;
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
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(10,10,10,0.7);
}
.modal-background {
  overflow: hidden;
  z-index: 40;
}

.modal-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding:2em;
  background-color: white;
  z-index: 50;
}
</style>
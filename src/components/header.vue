<template lang ="pug">
.wrapper
  div.right-size
    div.flex-sect
      p.first Website Redesign 
      div.icons
        img.photo2(src="../assets/user1.png" alt="User1")
        img.photo2(src="../assets/user2.png" alt="User2")
        img.photo2(src="../assets/user3.png" alt="User3")
        a.share-button(href="#") Share
        a.chat-button(href="#") Chat
    nav.menu-2
      router-link.menu2(to='/Tasks') Tasks
      router-link.menu2(to='/Kanban') Kanban
      router-link.menu2(to='/Activity') Activity
      router-link.menu2(to='/Calendar') Calendar
      router-link.menu2(to='/Files') Files
    router-view(
        @onDeleteTask="onDeleteTask($event)",
        @onDialog="onDialog($event)",
        @onAddTask="onAddTask($event)",
        @incOpenTasks="incOpenTasks",
        @drug="drug",
        @onChangeStatusOfTask="onChangeStatusOfTask($event)",
        @decOpenTasks="decOpenTasks"
        :myTask="myTask"
        :statusOfTask="statusOfTask")
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {Itask} from "./menu-components/types/task";
import { namespace } from 'vuex-class'

@Component

export default class Header extends Vue {

  myTask:Itask[]=[];

  statusOfTask=
  {
    todo:"To do",
    inprogress:"In progress",
    done:"Done"
  };

  onChangeStatusOfTask(index:number):void {
/*    switch (this.myTask[index].status) 
      {
        case this.statusOfTask.todo: this.myTask[index].status=this.statusOfTask.inprogress;break;
        case this.statusOfTask.inprogress: this.myTask[index].status=this.statusOfTask.done;break;
        case this.statusOfTask.done: this.myTask[index].status=this.statusOfTask.todo;break;
      }*/
  }

  drug(drugElementId:number,whereTo:string,whereFrom:string):void {
/*    if (whereTo=="todo" && whereFrom=="done") alert("Нельзя перемезать задачи из Done в ToDo!!!");
      else
      {
        if (whereTo=="done") this.myTask[drugElementId].status=this.statusOfTask.done;
        if (whereTo=="todo") this.myTask[drugElementId].status=this.statusOfTask.todo;
        if (whereTo=="inprogress") this.myTask[drugElementId].status=this.statusOfTask.inprogress;        
      }
*/
  }

  onDialog(index:number):void {
    this.$emit("onDialog",index)
  }

  onAddTask(nameOfTask:string[]):void {
    this.myTask.push({id:this.myTask.length,nameOfTask:nameOfTask[0], myTask:nameOfTask[1], dateTask:nameOfTask[2],status:this.statusOfTask.todo});
  }

  onDeleteTask(index:number):void {
    this.myTask.splice(index,1);
  }

  incOpenTasks():void {
    this.$emit("incOpenTasks");
  }

  decOpenTasks():void {
    this.$emit("decOpenTasks");
  }

/*  created():void
  {
    this.myTask=  [];
  }*/

}
</script>

<style scoped>

.right-size {
  width:100%;
}

.first {
  font-size: 32px;
  color: #131313;
  position: relative;
  margin-left: 85px;
  margin-top: 40px;
  text-align: left;
}


.first::before {
  content: "";
  background-color: #FFC300;
  background-image: url("../assets/Shapes@2x.png");
  width: 40px;
  height: 40px;
  background-size: cover;
  left: -50px;
  position: absolute;
}


.first::after {
  content: "";
  background-image: url("../assets/icon.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  left: 270px;
  position: absolute;
  top:6px;
  opacity: 0.5;
  top: 0px;
}


.flex-sect {
  align-items: center;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}


.share-button {
  vertical-align: middle;
  width: 67px;
  height: 30px;
  padding: 4px 10px;
    background: #EAEAEA;
    border-radius: 15px;
    color: #131313;
    text-decoration: none;
    margin-right: 15px;
    margin-left: 10px;
}


.chat-button {
  vertical-align: middle;
  width: 81px;
  height: 30px;
  padding: 4px 10px;
  background: #FFF8DD;
  border-radius: 15px;  
  color:#FFC200;
}


.icons {
  display: flex;
  text-align: center;
  align-items: center;
  align-self: flex-end;
}


.chat-button::before {
  content: url("../assets/Combined Shape@1x.svg");
  margin-right: 10px;
}


.photo2 {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}


.menu-2 {
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 11px;
}


.menu2 {
  opacity: 0.7;
  font-size: 16px;
  color: #131313;
  margin-right: 30px;
  text-decoration: none;
  margin-bottom: 10px;
}


.menu2 active {
    padding-bottom: 8px;
    border-bottom: 2px solid #FFC200;
    margin-bottom: -8px;
}

.router-link-active {
    padding-bottom: 8px;
    border-bottom: 2px solid #FFC200;
    margin-bottom: -8px; 
}


.poin {
  cursor: pointer;
}


/*********************************/
@media (max-width: 1024px)
{

li a {
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
}


.first {
  font-size: 32px;
  color: #131313;
  position: relative;
  margin-left: 70px;
  text-align: left;
}


.first::before {
  content: "";
  background-image: url("../assets/Shapes@2x.png");
  width: 40px;
  height: 40px;
  background-size: cover;
  left: -50px;
  position: absolute;
}


.first::after {
  content: "";
  background-image: url("../assets/icon.png");
  width: 25px;
  height: 25px;
  background-size: cover;
  left: 270px;
  position: absolute;
  top:6px;
  opacity: 0.5;
}


.flex-sect {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  width: 100%;
}


.users {
  margin-top: 10px;
  margin-right: 80px;
  height: 40px;
  width: 40px;
  background: url("../assets/user1.png");
  background-size: 100%;
}


.users::before { 
  content: "";
  background-image: url("../assets/user2.png");
  width: 40px;
  height: 40px;
  background-size: cover;
  position: absolute;
  margin-left: 70px;
}


.users::after {
  content: "";
  background-image: url("../assets/user3.png");
  width: 40px;
  height: 40px;
  background-size: cover;
  position: absolute;
  margin-left: 30px;
}




}

@media (max-width: 900px) {
.first::after {
  left: 170px;
  top:15px;
  position: absolute;
  opacity: 0.5;
}

.chat-button {
  width: 81px;
  height: 30px;
  vertical-align: middle;
  margin-right:90px;
  background: #FFF8DD;
  border-radius: 15px;  
  color:#FFC200;
}

}



</style>
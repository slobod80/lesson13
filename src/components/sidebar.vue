<template lang ="pug">
.wrapper
  div.left-size
    p <br>
    p.logo1 {{project}}
    div.photo
      div.photo1
        div.photo1-sp {{author}}
        p {{prof}}
    div.items
      section.item1
        h2 {{completedTask}}
        p.poin(@click="click1") Completed Task
      section.item1
        h2 {{openTasks}}
        p.poin(@click="clickOpenTasks") Open Tasks
    ul
      li
        a.menu(href="#") Menu
      li
        a(href="#") Home
      li
        a(href="#") My tasks
      li
        a(href="#") Notifications
        div.three 
          div.three1 {{notification}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import activityname from "../store/modules/activity"
import tasksname from "../store/modules/activity"

@Component

export default class leftColumn extends Vue 
{
        @Prop() notification!: number;
        @Prop() openTasks!: number;

        project:string="";
        author:string="";
        prof:string="";
        completedTask:number=0;

mounted():void {
  this.project=activityname.project;
  this.author=activityname.author;
  this.prof=activityname.prof;
  this.completedTask=activityname.completedTask;
}

        click1 ():void {
          if (confirm ("Are you sure you want to change the number of tasks?")) 
            {  
                alert("Нельзя так уменьшать задачи");
                  }
                else alert ("Открытых задач уже нет. Отдыхаем!")
            
          }

        clickOpenTasks():void 
        {
          if (this.openTasks>0)
                {
                  this.$router.push({path: '/tasks'});
                }
          else alert("Нет открытых задач!")
          
        }


  }
</script>

<style scoped>

.left-size {
  min-width: 270px;
  height:100%;
  background-color: #000;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
}


.logo1::before {
    content: url("../assets/Logo@3x.svg");
    width:21px;
    height:19px;
    position: absolute;
    left: 32px;
}


.logo1::after {
  content: url("../assets/Search@3x.svg");
  position: absolute;
  left: 234px;
}


.logo1 {
  margin-left: 65px;
  margin-top: 0px;
  line-height: 24px;
  padding-bottom: 30px;
}
.photo1 {
  font-size: 14px;
}
.photo {
  background-color: #202020;
  height: 80px;
}
.photo1 p {
  font-size: 12px;
  color: #9B9B9B;
  margin-left: 91px;
}
.photo1-sp {
  margin-left: 93px;
  padding-top: 15px;
}
.photo1-sp::before {
  content: "";
  background-image: url("../assets/face1.png");
  position: absolute;
  width: 48px;
  height: 48px;
  background-size: cover;
  border-radius: 50%;
  left:30px;
}
.photo1-sp::after {
  position: absolute;
  content: " ... ";
  color: #D8D8D8;
  font-size: 16px;
  left: 234px;
  padding-top: 10px;
}
.items {
  display: flex;
  color: #FFFFFF;
  font-size: 12px;  
}
.item1 {
  margin-left: 30px;
}
.items h2 {
  line-height: 24px;
  margin-top: 20px;
  font-size: 20px;
}
.item1 p {
  opacity: 0.5;
}
ul {
  margin-left: 30px;
}
li a {
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
  text-decoration: none;
}
li {
  margin-top: 20px;
}
.three {
  display: inline;
  position: absolute;
  width: 20px;
  height: 19px;
  background: #FFC200;
  border-radius: 50%;
  margin: 1px 12px;
}
.three1 {
  font-weight: 700;
  font-size: 13px;
  color: black;
  color: #131313;
  margin-left: 5px;
  margin-top: -1px;
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

@media (max-width: 900px) {

.left-size {
  display:none;
}

.first::after {
  left: 170px;
  top:30px;
  position: absolute;
  opacity: 0.5;
}
}
</style>

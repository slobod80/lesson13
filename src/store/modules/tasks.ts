import {VuexModule, Module, getModule, MutationAction, Mutation, Action} from "vuex-module-decorators"
import store from "../index"
import {Itask} from "@/components/menu-components/types/task"
import {statusOfTask} from "../../components/menu-components/types/statusoftask"
import api from "../../service/api"

@Module({
  namespaced:true,
  name:'tasksname',
  dynamic:true,
  store,
})

class TaskModule extends VuexModule {
  statusOfTask=
  {
    todo:"To do",
    inprogress:"In progress",
    done:"Done"
  };

  myTask:Itask[]=[]
  message:string="sdsds"


@Mutation addTask(payload:any):void {
  alert(payload[0]);
  this.myTask.push({id:this.myTask.length,nameOfTask:payload[0], myTask:payload[1], dateTask:payload[2],status:this.statusOfTask.todo});
}

@Mutation deleteTask(index:number) {
  this.myTask.splice(index,1);
}

@Mutation changeStatus(payload:number):void {
    switch (this.myTask[payload].status) 
      {
        case statusOfTask.todo: this.myTask[payload].status=statusOfTask.inprogress;break;
        case statusOfTask.inprogress: this.myTask[payload].status=statusOfTask.done;break;
        case statusOfTask.done: this.myTask[payload].status=statusOfTask.todo;break;
      }
}

@Mutation changeStatusDrug(payload:any):void {
  this.myTask[payload[0]].status=payload[1];
}

@Mutation editTask(payload:any):void {
  this.myTask[payload[0]].myTask=payload[1];
  this.myTask[payload[0]].dateTask=payload[2];
  this.myTask[payload[0]].status=payload[3];
}


@Action getAllTasks() {
const promise=api.getTasks()
    .then(response=>{
      //this.myTask=response;
      alert(response);
    });
}

get getMessage() {
      return this.message;
    }
}

export default getModule(TaskModule);
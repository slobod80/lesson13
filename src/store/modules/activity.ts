import {VuexModule, Module, getModule, MutationAction, Mutation, Action} from "vuex-module-decorators"
import store from "../index"
import {Idialog} from "../../components/menu-components/types/dialog"

@Module({
	namespaced: true,
	name: 'activityname',
	dynamic:true,
	store,	
})

class ActivityModule extends VuexModule {

	project:string="PROJECTUS";
	author:string="Jean Gonsales";
	prof:string="Product Owner";
	completedTask:number=372;

	photo:string[]=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"];

	dialogdata:string="TODAY";

	dialog:Idialog[]=[
              {log:"Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users", time:"8:40 PM",icon_photo:"Icon@3x.svg"},
              {log:"Emilee Simchenko commented on Account for teams and personal in bottom style",time:"7:32 PM",icon_photo:"icon2.svg"},
              {log:"During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes", time:"",icon_photo:"no-image.png"},
              {log:"Darika Samak uploaded 4 files on An option to search in current projects or in all projects",time:"6:02 PM",icon_photo:"icon3.png"}
              ]


}

export default getModule(ActivityModule);
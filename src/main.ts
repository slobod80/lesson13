import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from "./store/"
import axios from "axios"

import tasks from "./components/menu-components/tasks.vue";
import kanban from "./components/menu-components/kanban.vue";
import activity from "./components/menu-components/activity.vue";
import calendar from "./components/menu-components/calendar.vue";
import files from "./components/menu-components/files.vue";
import stub from "./components/menu-components/stub.vue";
import error404 from "./components/menu-components/error404.vue"

const routes = [
    { path: '/tasks', component: tasks},
    { path: '/kanban', component: kanban },
    { path: '/activity', component: activity },
    { path: '/calendar', component: calendar },
    { path: '/files', component: files },
    { path: '/', component: tasks },
    { path: '*', component: error404 }
];

Vue.use(Router);
Vue.use(Vuex);
const router = new Router({routes});
var data = { assd: 1 }

var moment=require("moment");

Vue.filter('dateTask', function (value:string):string {
  return moment(value,"YYYY-MM-DD").format("DD.MM.YYYY");
})

var vm=new Vue({
	router,
    store,
	data:data,
  render: h => h(App),
}).$mount('#app')

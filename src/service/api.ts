import axios from "axios"

async function getTasks() {
	const response=await axios.get("https://cold-water-7357.getsandbox.com/tasks");
	return response.data;
}


async function addTask(id:number,nameOfTask:string,inputTask:string,inputDate:string) {


	const response=await axios.post("https://cold-water-7357.getsandbox.com/add", 

JSON.stringify(
	{
		id:id,
		nameOfTask:nameOfTask,
		myTask:inputTask,
		dateTask:inputDate,
		status:"To do"
	}),
	{
		headers: {'Content-Type': 'application/json'}
	} )
	.then(response=> {
	})

}

async function deleteTask(index:number) {
	const response=await axios.delete("https://cold-water-7357.getsandbox.com/delete", {data:{ id:index }});
}

export default {getTasks,addTask,deleteTask}
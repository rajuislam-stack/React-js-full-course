//Note: Updating state logic without a Reducer function.(React CRUD Oparation without reducer)

import { useState } from "react";
import AddTask1 from "./AddTask1";
import TaskList1 from "./TaskList1";

export default function App1() {
  const [taskList, setTaskList] = useState(initialTasks);

  function handleAddTask(newText){
      setTaskList([
        ...taskList,
        {id: nextId++, text: newText, done: false}
      ])
  }

  function handleTextChange( newTask){
    setTaskList(taskList.map(task => {
      if(newTask.id == task.id){
        return newTask 
      }
      return task
    }))
  }

  function handleDelete(id){
    setTaskList(taskList.filter(task =>{
       if(task.id !== id) return task;
    }))
  }
  return (
    <div>
      <AddTask1 onHandleAddTask = {handleAddTask}/>
      <TaskList1 
      taskList ={taskList}
      onHandleTextChange = {handleTextChange}
      onHandleDelete = {handleDelete}
      />
    </div>
  )
}


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

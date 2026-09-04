//Extra Class //React Task Application + CRUD + Reduce

import { useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import taskReducer from "./reducers/taskReducer";

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export default function App() {
  const [tasks , dispatch] = useReducer(taskReducer,initialTasks)

  function handleTaskAdd(text){
    dispatch({type: 'add', text: text , id: nextId++})
  }

  function handleUpdateChange(task){
   dispatch({type: 'update', task: task})
  }

  function handleDeleteClick(task){
   dispatch({
    type: 'delete',
    task: task
   })
  }


  return (
    <div className="flex flex-col items-center justify-center mt-5">

      <AddTask 
      onAddTask = {handleTaskAdd}
      />

      <TaskList 
      tasks = {tasks} 
      onUpdateChange = {handleUpdateChange} 
     onHandleDeleteClick = {handleDeleteClick}/>
    </div>
  )
}

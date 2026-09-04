//Extracting state logic into a reducer(React CRUD Oparation with reducer)

import { useReducer, useState } from "react";
import AddTask2 from "./AddTask2";
import TaskList2 from "./TaskList2";
import {reducer} from "../reducers/taskReducer.js";

export default function App2() {
  const [taskList, dispatch] = useReducer(reducer, initialTasks);

  function handleAddTask(newText){
     //"Action" Object
      dispatch({
        type:'added',
        id: nextId++,
        text: newText
      })
  }

  function handleTextChange( newTask){
     dispatch({
      type:'changed',
      task: newTask
     })
  }

  function handleDelete(currentId){
    dispatch({
      type:'deleted',
      id: currentId
    })
  }
  return (
    <div>
      <AddTask2 onHandleAddTask = {handleAddTask}/>
      <TaskList2 
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


//Note: Following 3 step you can migrate from useState to useReducer.

//Step 1: Move from setting state to dispatching actions

//Step 2: Write a reducer function 

//Step 3: Use the reducer from your component


import Task2 from "./Task2";


export default function TaskList2({taskList, onHandleTextChange, onHandleDelete}) {
  return (
    <div>
      {
      <ul>
        {
        taskList.map(task => (
        <li key={task.id}>
          <Task2 
          task ={task}
          handleTextChange ={onHandleTextChange}
          handleDelete ={onHandleDelete}
          />
        </li>
      ) )  
        }
      </ul>
      }
    </div>
  )
}

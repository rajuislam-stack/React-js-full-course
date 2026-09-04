import Task1 from "./Task1";


export default function TaskList1({taskList, onHandleTextChange, onHandleDelete}) {
  return (
    <div>
      {
      <ul>
        {
        taskList.map(task => (
        <li key={task.id}>
          <Task1 
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

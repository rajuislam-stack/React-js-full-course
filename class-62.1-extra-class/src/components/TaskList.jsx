import Task from "./Task";

export default function TaskList({tasks,onUpdateChange,onHandleDeleteClick}) {
  return (
    <div>
      {
        tasks.map(task => {
          return  <Task 
          key={task.id} 
          task = {task} 
          onUpdate = {onUpdateChange}
          onDelete = {onHandleDeleteClick}
          />
        })
      }
      
    </div>
  )
}

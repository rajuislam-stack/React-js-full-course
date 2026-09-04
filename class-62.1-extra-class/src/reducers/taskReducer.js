//Reducer Function

export default function taskReducer(tasks, action){
 if(action.type === 'add'){
  return [...tasks, {id: action.id, text: action.text, done:false}]
 }
 else if(action.type === 'update'){
  return (
    tasks.map(t => {
      if(t.id === action.task.id){
        return action.task;
      }
      else{
        return t;
      }
    })
  )
 }
 else if(action.type === 'delete'){
 return tasks.filter(t => t.id !== action.task.id);
 }
 else throw Error('Unknown type error:' + action.type)
}
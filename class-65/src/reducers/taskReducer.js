
export function reducer(tasks, action) {
    if(action.type == 'added'){
      return [
        ...tasks,
        {id: action.id, text: action.text, done: false}
      ]
    }
    else if(action.type == 'changed'){
        return tasks.map(task =>{
          if(task.id == action.task.id){
            return action.task
          }
          return task
        })
    }
    else if(action.type == 'deleted'){
      return tasks.filter(task =>{
        return task.id !== action.id;
      })
    }
    else{
    alert( Error('Unknown action:' + action.type))
    return tasks;
    }
}

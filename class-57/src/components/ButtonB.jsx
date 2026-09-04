export function ButtonC({onSmash,children}){
  return (
    <button onClick={(e)=>{
       e.stopPropagation();  {/*Stop Propagation*/}
       onSmash(); 
    }}>
       {children}
    </button>
  )
}      


export default function ButtonB({onSmash,children}) {
  return (
    <button onClick={onSmash}> 
     {children}
    </button>
  )
}               //Passing event handlers as props 


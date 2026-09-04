
export default function  AlertButton({message,children}){  

  function handleClick(){ //Reading props in event handlers
    alert(message)
  };

  return (
    <button onClick={handleClick}>
    {children}
    </button>
  )
}

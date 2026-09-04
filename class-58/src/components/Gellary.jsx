import { useState } from "react"
import { sculptureList } from "../data"

export default function Gellary() {

  const [index, setIndex] = useState(0);   //Adding a state variable 
  const [showMore, setShowMore] = useState(false); //Giving a component multiple state variable

  function handleClick(){
   setIndex(index + 1);
  }

  function handleMoreClick(){
   setShowMore( !showMore)
  }

  let sculpture = sculptureList[index];

  return (
    <>
    <button onClick={handleClick}>
      Next
    </button>

    <h1>
      <i>{sculpture.name}</i> by {sculpture.artist}
    </h1>

    <h3>
      {index + 1} of {sculptureList.length}
    </h3>

    <button onClick={handleMoreClick}>
     { showMore ? 'Hide': 'Show'} Details
    </button> 

     <p>
      {showMore && sculpture.description}
     </p>

    <img 
    src= {sculpture.url}
    alt={sculpture.alt} 
    />
    </>
  )
}

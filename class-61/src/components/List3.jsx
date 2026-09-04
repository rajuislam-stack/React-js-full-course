//Reversing an array

import { useState } from "react";

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List3() {
   const [list, setList] = useState(initialList);

   function handleClick(){
    //  let nextList = [...list];
    let nextList = list.slice()
        nextList.reverse()
     setList(nextList)
   }

  return (
    <>
     <button onClick={handleClick}>Reverse</button>
    <ul>
      { list.map((artwork)=>(
        <li key={artwork.id}>
           {artwork.title}
        </li>
      )
      )}</ul>
    </>
  )
}


//Note: For Reversing or Sorting

//avoid (mutates the array)
// reverse(), sort()

//prefer (returns a new array)
//toReversed(), toSorted(), slice(), [...] copy first then use reverse()




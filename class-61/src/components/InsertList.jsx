//Inserting into an array 

import { useState } from "react";

let nextIndex = 3;

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];


export default function InsertList() {
  const [name ,setName] = useState('')
 const [artists, setArtists] = useState(initialArtists);

 function handleClick(){
  let insertAt = 2;
  let nextArtists = [
    ...artists.slice(0, insertAt),
    {id: nextIndex++, name},
     ...artists.slice(insertAt)
  ]

  setArtists(nextArtists);
  setName('')
 }

  return (
    <div>
 <h1>Inspiring Sculptors:</h1>

  <input 
  type="text" 
  value={name}
  onChange={(e)=> setName(e.target.value)}
  />

   <button onClick={handleClick}>
    Insert
   </button>

  <ul>
    {
      artists.map((artist)=>{
      return (
        <li key={artist.id}>
          {artist.name}
        </li>
      )
      })
    }
  </ul>
    </div>
  )
}

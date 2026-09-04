//Removing from an Array

import { useState } from "react";

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List2() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h1>Inspiring Sculptors:</h1>
      <ul>
        {
          artists.map(artist => {
            return (
          <li key={artist.id}>
            {artist.name}{' '}

            <button onClick={()=>{
              return setArtists(
              artists.filter(a => a.id != artist.id)
            )
            }} >
              delete
            </button>
          </li>
            )
          })
        }
      </ul>
    </form>
  )
}


//Note: For Removing

// 1. avoid (mutates the array)
// pop(), shift(), splice()

//2. prefer (returns a new array)
// slice(), filter()
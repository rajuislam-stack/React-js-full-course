//Adding to an array 

import { useState } from "react"

let nextId = 0;

export default function List1() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([])

  function handleClick(){
     setArtists([...artists, {id: nextId++, name:name}]);
     setName('')
  }
  
  return (
    <form onSubmit={e => e.preventDefault()}>
      <h1>Inspiring Sculptors:</h1>

      <input
       type="text"
       placeholder="Add your name"
       value={name}
       onChange={e => setName(e.target.value)}
       />

       <button onClick={handleClick}>Add</button>
      
      <ul>
        {artists.map(artist => {
          return <li key={artist.id}>{artist.name}</li>
        })}
      </ul>
    </form>
  )
}


//Note: For Adding

// 1. avoid (mutates the array)
// push(), unshift() 

// 2. prefer (returns a new array)
// Concat(), [...] spread syntax 
//Updating Objects in State(Part-1)

import { useState } from "react"

export default function Form() {
  const [person, setPerson] = useState({
    fistName: 'Barbara',
    lastName:'HepWorth',
    email:'hepworth@sculpture.com'
  })


  function handleFirstNameChange(e){
    setPerson({...person, fistName: e.target.value})
  }

  function handleLastNameChange(e){
   setPerson({...person, lastName: e.target.value})
  }

  function handleEmailNameChange(e){
   setPerson({...person, email: e.target.value})
  }


  return (
    <form>
    <label >
      FistName:
     <input 
         type="text"
         value={person.fistName}
         onChange={handleFirstNameChange}
      />
    </label> <br/>

    <label >
      LastName:
     <input 
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
      />
    </label>  <br />

    <label >
      Email:
     <input 
         type="email" 
         
         value={person.email}
         onChange={handleEmailNameChange}
      />
    </label>
    
     <p>Details:- <b>FirstName</b> {person.fistName} <b>LastName:</b> {person.lastName} <b>Email:</b>{person.email}</p>
    </form>
  )
}

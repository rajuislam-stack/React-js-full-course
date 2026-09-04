//Updating Nested Object

import { useState } from "react"

export default function Form() {
  const [person, setPerson] = useState({
    name:'Niki de Saint Phalle',
    artWork:{
      title:'Blue Nana',
      city:'Humburg',
      image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
    }
  })


  function handleNameChange(e){
    setPerson({
      ...person,
      name: e.target.value
    })
  }
  function handleTitleChange(e){
     setPerson({
      ...person,
      artWork:{...person.artWork, title: e.target.value}
     })
  }
  function handleCityChange(e){
    const nextArtWork = {...person.artWork, city:e.target.value};
    const nextPerson = {...person, artWork: nextArtWork}
    setPerson(nextPerson);
  }
  function handleImageChange(e){
   setPerson({
    ...person,
    artWork: {...person.artWork, image: e.target.value}
   })
  }
  return (
    <form>
      <label>
        Name: 
        <input 
          type="text"
          value={person.name}
          onChange={handleNameChange}
         />
      </label> <br /> <br />

      <label>
        Title: 
        <input 
          type="text"
          value={person.artWork.title}
          onChange={handleTitleChange}
         />
      </label> <br /><br />

      <label>
        City: 
        <input 
          type="text"
          value={person.artWork.city}
          onChange={handleCityChange}
         />
      </label> <br /><br />

      <label>
        Image: 
        <input 
          type="text"
          value={person.artWork.image}
          onChange={handleImageChange}
         />
      </label>

      <p><i>{person.artWork.title}</i> {' by '} {person.name} <br />( located in {person.artWork.city})</p>

      <img src={person.artWork.image} alt={person.artWork.title} />
    
    </form>
  )
}

import { useState } from "react"

export default function ControlledForm() {
  const [name, setName] = useState('')

  function handleChange(e){
      setName(e.target.value);
  }

  function handleFormSubmit(e){   //Form Handling (extra topic)
      e.preventDefault();
      alert(`Submitted Name: ${name}`);
  }
  return (
    <>
    <form onSubmit={handleFormSubmit}>

       <label>
        Name:
         <input type="text" value={name} onChange={handleChange} />
       </label> <br /> <br />

       <button>Submit</button>
    </form>
    </>
  )
}

//Implement the UI Declaratively in React

function submitForm(answer){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     let shouldError = answer.trim().toLowerCase() !== 'lima';

     if(shouldError){
      reject(new Error('Good guess but a wrong answer. Try again !'))
     }
    else{
      resolve();
     }
    }, 1500);
  })
}


import { useState } from "react"

export default function Form() {

  const [answer, setAnswer] = useState('');
  const [error , setError] = useState(null);
  const [status , setStatus] = useState('empty');

 async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting')
    try{
       await submitForm(answer)
       setStatus('success');
    }
    catch(err){
      setError(err);
      setStatus('error');
    }
  }

  if(status === 'success'){
    return <h1>That's Right!</h1>
  }


  return (
    <>
   <h2>City quize</h2>

   <p>In which city is there a billboard that turns air into drinkable water?</p>

   <form onSubmit={handleSubmit}>
    <textarea 
    disabled={status === 'submitting'}
    value={answer}
    onChange={e => setAnswer(e.target.value)}
    ></textarea> 
    <br />

   <button disabled={ answer.trim() === '' || status === 'submitting'}>
    Submit
   </button>

   {status === 'submitting' && (
    <p>Loading...</p>
   )}

   {
    status === 'error' && (
      <p style={{color:'red'}}>{error.message}</p>
    )
   }
   
   </form>
    </>
  )
}

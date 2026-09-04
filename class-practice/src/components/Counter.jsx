import { useState, useRef } from 'react';

export default function Counter() {
  const [show , setShow] = useState(true);
  let ref = useRef(null)

  return(
    <>
    <button onClick={()=>{
      setShow(!show);
    }}>
      toogle
    </button>
    <button onClick={()=>{
       ref.current.remove()   //Avoid try to manupulate dom that managed by react 
    }}>
      remove from dom
     </button>
    {show && <p ref={ref}>Hello world!</p>}
    </>
  )
}

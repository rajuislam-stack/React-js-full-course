import { useRef, useState } from "react"

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now , setNow ] = useState(null);
  let ref = useRef(null)

  function handleStart(){
     setStartTime(Date.now());
     setNow(Date.now());

    ref.current =  setInterval(()=>{
      setNow(Date.now());
     }, 10);
  }

  function handleStop(){
    clearInterval(ref.current);
  }

  let secondsPassed = 0;

  if(startTime !== null && now !==null){
    secondsPassed = (now - startTime) / 1000;
  }


  return (
    <div>
      <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </div>
  )
}

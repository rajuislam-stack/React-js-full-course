import { useEffect, useRef, useState } from "react"

export default function VideoPlayer2() {
   const [isPlaying, setIsPlaying] = useState(false);
   const [text , setText] = useState('');
   let ref = useRef(null);

   useEffect(()=>{
      if(isPlaying){
        ref.current.play();
        console.log('Calling Video.play()')
      }
      else{
        ref.current.pause();
        console.log('Calling Video.pause()')
      }
   }, [isPlaying]);

  return (
    <div className="div-2">

      <input 
      type="text"
      value={text}
      onChange={(e)=> setText(e.target.value)}
       /> <br />


      <button onClick={()=>{
         setIsPlaying(!isPlaying);
      }}>
        {isPlaying ? 'Pause':"Play"}
      </button>

      <video style={{width:'100%'}} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" ref={ref} loop playsInline></video>
    </div>
  )
}

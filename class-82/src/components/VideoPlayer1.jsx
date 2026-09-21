import { useEffect, useRef } from 'react'

export default function VideoPlayer1({isPlaying, src}) {
  let ref = useRef(null);

  useEffect(()=>{
    if(isPlaying){
      ref.current.play();
    }
    else{
      ref.current.pause();
    }
  })
   

  return (
    <div>
      <video src={src} ref={ref} style={{width:'100%'}} loop playsInline >
      </video>
    </div>
  )
}

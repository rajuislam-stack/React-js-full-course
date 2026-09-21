import { useState, useRef ,useEffect} from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  let ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  useEffect(()=>{
    if(isPlaying){
    ref.current.play()
  }
  else{
    ref.current.pause()
  }
  }, [isPlaying])

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <video
       width="250" 
       ref={ref}
       loop
       onPlay={()=>{
         setIsPlaying(true)
         console.log('ejej')
       }}

       onPause={()=>{
        setIsPlaying(false)
        console.log('flase')
       }}
       >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

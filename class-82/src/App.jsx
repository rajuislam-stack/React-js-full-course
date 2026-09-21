//Module-4: Escape Hatches //Chapter: Synchronizing with Effects  (useEffect Hook)

import { useEffect, useState } from "react"
import VideoPlayer1 from "./components/VideoPlayer1";
import VideoPlayer2 from "./components/VideoPlayer2";


export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(function (){
     console.log('two');
  })

  console.log('One')

  return (
    <div>
      <h1>Welcome to React Learning!</h1>
      
      <button onClick={()=> setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause':'Play'}
      </button>

      <VideoPlayer1
       isPlaying = {isPlaying}
       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />


      <VideoPlayer2/>
    </div>
  )
}

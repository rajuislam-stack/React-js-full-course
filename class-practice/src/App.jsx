//Class-practice // Manupulating the DOM with Refs

// Getting a ref to the node 

import Form from './components/Form';
import CatFriends from './components/CatFriends';
import CatFriends2 from './components/CatFriends2';
import MyForm from './components/MyForm';
import { useRef } from 'react';
import Counter from './components/Counter';
import VideoPlayer from './components/VideoPlayer';
import CatFriendsChallenge from './components/CatFriendsChallenge';

export default function App() {
  let myRef = useRef(null);

  function handleClick(){
    myRef.current.style.backgroundColor = 'red';
  }

  return (
    <div ref={myRef} >
      <button onClick={handleClick}>
        click me
      </button> <br /> <br />

      <Form/> <br />

      <CatFriends/> <br />

      <CatFriends2/> <br />

      <MyForm/> <br />

      <Counter/> <br />

      <VideoPlayer/> <br />

      <CatFriendsChallenge/>

    </div>
  )
}

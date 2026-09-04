//Module-1: Describing the UI //Chapters: JavaScript in JSX with Curly Braces, Passing Props to a Component

import Avatar from "./components/Avatar";
import Number from "./components/Number";
import Profile from "./components/Profile";

export default function App() {

  let avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  let description = 'Gregorio Y. Zara';

  function add(a,b){
    return a + b;
  }

  return (
    <>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />    {/*JavaScript in JSX with Curly Braces*/}

      <h1 style={{color: 'red'}}>Addition</h1>
      <p>2 + 3 = {add(2,3)}</p>


      <Avatar
       size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}/>

      <Avatar 
       size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />    {/*Passing Props to a Component*/}

      <Avatar
      size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />

      <Number
       src='https://images.pexels.com/photos/16937267/pexels-photo-16937267.jpeg'

       alt ='simple image'
      />

      <Profile/>
    </>
  );
}

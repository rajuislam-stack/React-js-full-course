//Class-50 //Topics: Rendering lists, Responding to events,Updating the screen, Using Hooks, Sharing data between components and Tic-Tac-Toe Game part-01(in class-50-game-part-1)

import { useState } from "react";
import MyButton from "./components/MyButton";
import ShoppingList from "./components/ShoppingList";
import UseStateMethod from "./components/UseStateMethod";
import ShareData from "./components/ShareData";

const products = [
  {title:'Cabbage', id:1},
  {title:'Garlic', id:2},
  {title:'Apple', id:3},
];

const arrayOfLi = products.map(product => <li key={product.id}>{product.title}</li>);


export default function App(){

  const [countTogether, setCountTogether] = useState(0);

  function handleClick(){
    setCountTogether(countTogether+1);
  }

  return (
    <>
   <ul>
   {arrayOfLi}     {/*Rendering lists*/}
   </ul>

   <ShoppingList/>


  <MyButton/> <br /><br />   {/*Responding to events*/}

   <UseStateMethod/>    
   <UseStateMethod/> <br /><br />   {/*Updating the screen*/}
    

  <h1>Counters that update together</h1>

    <ShareData counts={countTogether} handlefn={handleClick}/>
    <ShareData counts={countTogether} handlefn={handleClick}/>  {/*Sharing data between components*/}


    
    </>
  )
}



////Note: State is data that can change over time. It can be a number, string, array, or object depending on how we use it. When the state value is updated, the component re-renders automatically.

//Here:

//useState → is a function (hook)

// count → is the state (data)

// setCount → is a function to update the state


// Using Hooks

//Functions starting with "use" are called Hooks. useState is a built-in Hook provided by React.

//Props

//Props are data passed from a parent component to a child component in React.
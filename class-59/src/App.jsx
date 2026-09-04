//Module-2: Adding-Interactivity // Chapters: Render and Commit, State as a Snapshot

import { useState } from "react"

function Counter(){
 const  [number, setNumber] = useState(0);
 const [counter, setCounter] = useState(0);
 const [countNumber, setCountNumber] = useState(0);

 function handleClick(){
   setNumber(number + 1)
   setNumber(number + 1)
   setNumber(number + 1)
 }

 function handleCounterClick(){
    setCounter(counter + 5);
    alert(counter);
 }

 function handleCountNumberClick(){
    setCountNumber(countNumber + 5);
    setTimeout(()=>{
      alert(`${countNumber}`)
    },3000)
    console.log(countNumber)
 }

 return (
  <>
   <h1>{number}</h1>
  <button onClick={handleClick}>+3</button>

  <h1>{counter}</h1>
  <button onClick={handleCounterClick}>5+</button>

  <h1>{countNumber}</h1>
 <button onClick={handleCountNumberClick}>5+</button>

  </>
 )
}


export default function App() {
  return (
    <>
    <Counter/>
    </>
  )
}


//Concept of Recursive Function (Leetcode)

//Problem: Fibonacci Number (solved)

var fib = function(n) {
    if(n == 0) return 0;   //with recursive function
    if(n == 1) return 1; 
  return fib(n - 1) + fib(n - 2);
};

let x = fib(10)
console.log(x)


//alternative solution (solved)

var fib = function(n) {
    const arr = [];        //without recursive function
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <=n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

let y = fib(5);
console.log(y)

//Note: Recursion problem gulor moddhe ,, jei value gulor man deuya thakbe tader,,bole base case and jei value gulor man deuya thake na ,,tader bole recursive case.


//Note: 1. Chapter: Render & Commit — Full Clear Concept (3 Steps)

// React এ UI update হওয়ার পুরো process 3টা step এ হয়:

// 1. Trigger ( কখন শুরু হয়)
// - Initial render (app load হলে)
// - State / Props change হলে
// মানে: React কে বলা হয় “UI আবার calculate করো”

// 2. Render Phase (কি করে)
// - Component function call হয়
// - JSX → Virtual UI (new version) তৈরি করে
// - আগের UI এর সাথে compare করার জন্য প্রস্তুত করে
// - Real DOM এ কিছুই change করে না 
// মানে: শুধু “UI কেমন হওয়া উচিত” সেটা হিসাব করে

// 3. Commit Phase (শেষে কি হয়)
// - Render এ calculate করা change গুলো Real DOM এ apply করে
// - শুধু যেটুকু change হয়েছে সেটুকুই update করে (efficient)
// - তারপর browser screen এ দেখায় (paint)
// মানে: “UI actually user কে দেখানো হয়”

// Full Flow:
// Trigger → Render (calculate UI) → Commit (update DOM) → Paint (show)

// Important:
// - Render phase এ DOM touch করা হয় না
// - Commit phase এ real change হয়
// - Same output হলে DOM update হয় না



// Note: 2. Chapter: State as a Snapshot (Full concept)

// React এ initially একবার render হয়, শুধু state update হওয়ার জন্য না,বরং app start হলেই initial render automatically trigger হয়।এরপর state/props change না হলে React আবার render করে না (re-render হয় না).

// Initial render এ React component function call হয়। Render phase এ যেখানে যেখানে state variable ব্যবহার করা হয়েছে, সেখানে সেখানে state এর current value বসিয়ে একটা snapshot তৈরি হয়। তারপর React এই virtual DOM কে commit করে, যার ফলে আমরা UI এর একটা version দেখতে পাই।

// এরপর যখন event ঘটে (যেমন button click), তখন event handler state update করে। আর state update হলেই React এ আবার 3টা step হয়: 1. trigger 2. render(schedule করে) 3. commit (if needed)

// Render phase এ component আবার call হয়(Re-render), JSX আবার calculate হয়, নতুন state value দিয়ে snapshot তৈরি হয়,এবং আগের render এর সাথে compare করা হয়।

// সবশেষে যদি পরিবর্তন থাকে তাহলে React real DOM এ commit করে,আর আমরা screen এ updated UI দেখতে পাই। এটাই পুরো flow।


//Note: Recursive Function (পুনরাবৃত্তিমূলক)

// Recursive Function (Main concept)

// যে function সরাসরি বা ঘুরে ফিরে নিজেকেই call করে, সেটাই recursive function।

// 1. Direct recursion:
// function নিজের ভেতর থেকেই নিজেকে call করে

// 2. Indirect recursion:
// অন্য function এর মাধ্যমে আবার নিজের কাছে ফিরে আসে

// অবশ্যই base case থাকতে হবে, না হলে infinite loop হবে

// One line:
// Recursive = function ultimately calls itself

//For Example

// দুইটা case

// 1. Direct recursion (common)
// function fn() {
//   fn(); // নিজের ভেতর থেকে নিজেকেই call
// }

// 2. Indirect recursion (এটাও recursion)
// function A() {
//   B();
// }

// function B() {
//   A();
// }
//Module-3: Managing State //Chapters: Sharing State Between Components,Preserving and Resetting State(Part-1)

import { useState } from "react";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";

export default function App() {
  const [showB, setShowB] = useState(true)
  let counter = <Counter/>

  return (
    <>
    <div>
      <Accordion/>
    </div>

    <br />
    <br />

    <div>
      {counter }
      {showB && counter}
      <label>
        <input 
        type="checkbox"
        checked = {showB}
        onChange={(e)=> setShowB(e.target.checked)}
         />
        Rander the second counter
      </label>
    </div>

    <br  className="br"/>
    <br  className="br"/>
    <br  className="br"/>
   
    </>
  )
}



//Note: Controlled Component & Uncontrolled Component And Single Source of Truth (Concept)

//Controlled Component: যখন কোনো চাইল্ড কম্পোনেন্টের গুরুত্বপূর্ণ তথ্য বা আচরণ তার নিজস্ব স্টেটের বদলে প্যারেন্ট থেকে পাঠানো Props দ্বারা নিয়ন্ত্রিত হয়, তখন তাকে Controlled Component বলে। এক্ষেত্রে প্যারেন্ট কম্পোনেন্টই ঠিক করে দেয় চাইল্ডটি কী দেখাবে বা কীভাবে কাজ করবে।

//Uncontrolled Component: যখন কোনো চাইল্ড কম্পোনেন্ট তার নিজস্ব Local State দিয়ে নিজেকে পরিচালনা করে এবং প্যারেন্ট কম্পোনেন্ট তার (child) ভেতরের অবস্থা সরাসরি নিয়ন্ত্রণ করতে পারে না, তখন তাকে Uncontrolled Component বলে।

//React এ প্রতিটা আলাদা state এর জন্য একটা নির্দিষ্ট component থাকে যেটা ওই state এর “owner”। একে বলে Single Source of Truth।
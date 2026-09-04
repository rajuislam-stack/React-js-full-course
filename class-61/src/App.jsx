//Module-2: Adding Interactivity //Chapters: Updating Objects in State (Last-part), Updating Arrays in State

import { useState } from "react"
import Form from "./components/Form"
import List1 from "./components/List1";
import List2 from "./components/List2";
import CounterList from "./components/CounterList";
import InsertList from "./components/InsertList";
import List3 from "./components/List3";
import BucketList from "./components/BucketList";
export default function App() {

  return(
    <>
    <Form/> <br/>
    <List1/> <br /> <br />
    <List2/> <br /> <br />
    <CounterList/> <br /> <br />
    <InsertList/> <br /> <br />
    <List3/> <br /> <br />
    <BucketList/>
    </>
  )
}

//Module-3: Managing State //Chapters: Reacting to Input with State

import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <Form/>
    </div>
  )
}


//Note: Implementing declararive UI in react follows 5 spets:

//Step 1. Identify your components defferant visul state

//Step 2. Determine what triggers whose state changes

//Step 3. Represent the state in memory with useState 

//Step 4: Remove any non-essential state variables 

//Step 5: Connect the event handler to set state
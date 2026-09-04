//Module-2: Adding Interactivity //Chapter: State: A Component's Memory

import Gellary from "./components/Gellary";

export default function App() {
  return (
    <>
  <Gellary/> 
  <br />
  <br />
  <Gellary/>     {/*State is isoluted and private */}
    </>
  )
}


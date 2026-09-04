//Module-1: Describing the UI //Chapters: Conditional Rendering, Rendering Lists

import ControlledForm from "./components/ControlledForm";
import Greetings from "./components/Greetings";
import MyList from "./components/MyList";

export default function App() {
  return (
    <>
    <Greetings isLogin ='true'/>
    <MyList/> <br />
    <ControlledForm/>
    </>
  )
}

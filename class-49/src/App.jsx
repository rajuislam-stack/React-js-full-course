//Class 49//My fisrt React class //Inroduction to React //Topics:- Creating and Nesting Components, Writing markup with JSX, Adding styles, Displaying data, and Conditional rendering 


import A from "./components/A";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import "./App.css";
import Profile from "./components/Profile";
import AdminPannel from "./components/AdminPannel";
import LoginForm from "./components/LoginForm";

// export default function App(){   
// return <h1>Hello world!</h1>   //Creating a Component
// }

let content = "";    
let isLogedIn = true;   //Conditional Randaring

if(isLogedIn){
  content = <AdminPannel/>;
}
else{
  content = <LoginForm/>;
}


export default function App() {    
  return (             
    <>
      <h1>Welcome to the world of React!</h1>
      <A />
      <A />      {/*Markup with jsx*/}
      <Navbar />

      <h1 className="header-h1">Welcome to my app</h1> {/*Adding styles*/}

      <MyButton />   {/*Nesting component*/}
   
      <Profile/>     {/*Displaying data*/}


       <div>          {/*Conditional Randaring*/}
        {content}
       </div>

      <div>               
        {
          isLogedIn ? <AdminPannel/>: <LoginForm/>
        }
      </div>

     <div>
      {
        isLogedIn && <AdminPannel/>
      }
     </div>
    </>
  );
}

//Note: 1. A component is a piece of the UI (user interface) that has its own logic and appearance.

//2.  React components are ultimately JavaScript functions that return jsx.

//3. The markup syntax you’ve seen above is called JSX.

// <></> (Fragment)




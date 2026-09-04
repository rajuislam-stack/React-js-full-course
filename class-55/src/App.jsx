// Module-1: Describing the UI// Chapters: Your First Components, Importing and Exporting components, Writing markup with JSX


import {Profile} from './Gellary'
import Gellary from './Gellary' 

export default function App() {
  
  return (
    <>
    <Profile/>
    <Gellary/>
    <br/>
    <h1>Hello world!</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="img" className='photo'/>
    </>
  )
}


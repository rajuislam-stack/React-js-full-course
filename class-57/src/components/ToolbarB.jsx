import { ButtonC } from "./ButtonB"


export function ToolbarC(){
  return (
    <div onClick={()=>{
      alert('You clicked on the toolbarC!')
    }}>
      <ButtonC onSmash={()=> alert('Playing!')}>
        Play Movie
      </ButtonC>
      <ButtonC onSmash={()=> alert('Uploading!')}>
        Upload Image
      </ButtonC>
    </div>
  )
}




export default function ToolbarB() {
  return (               //Event propagation(প্রসারণ)
    <div onClick={()=>{
      alert('You clicked on the toolbarB!')
    }}>
      <button onClick={()=> alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={()=> alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  )
}



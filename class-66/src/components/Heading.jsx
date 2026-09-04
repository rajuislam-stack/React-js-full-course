import { useContext } from "react"
import { LevelContext } from "../contexts/LevelContext"

export default function Heading({children}) {
  const level = useContext(LevelContext)
  
  if(level  == 1){
    return <h1>{children}</h1>
  }
  else if(level == 2){
    return <h2>{children}</h2>
  }
 else if(level == 3){
    return <h3>{children}</h3>
  }
 else if(level == 4){
    return  <h4>{children}</h4>
  }
else  if(level == 5){
    return <h5>{children}</h5>
  }
else  if(level == 6){
    return <h6>{children}</h6>
  }


}

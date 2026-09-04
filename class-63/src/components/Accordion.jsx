//Lifting State Up

import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0); 
 
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel 
      title ='About' 
      isActive={activeIndex === 0}
      onShow = {()=> setActiveIndex(0)}
      >
       Consectetur nemo doloremque qui ad, nisi, vero illum voluptatem, neque repudiandae ipsa mollitia at iste sit ratione error laudantium libero veniam consequatur!
      </Panel>

      <Panel 
      title ="Etymology" 
      isActive={activeIndex === 1}
        onShow = {()=> setActiveIndex(1)}
      >
         sit amet consectetur adipisicing elit. Similique et ipsam sit, perferendis nemo est quod beatae animi consequuntur quia cupiditate soluta quaerat deserunt aspernatur. Itaque blanditiis saepe corrupti dolores.
      </Panel>

      <Panel 
      title ="history" 
      isActive={activeIndex === 2}
        onShow = {()=> setActiveIndex(2)}
      >
       consectetur adipisicing elit. Esse officiis quod et neque vel nostrum repellendus iusto exercitationem doloribus excepturi?
      </Panel>
    </div>
  )
}

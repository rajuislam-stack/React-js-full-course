//Scrolling to an element

import { useRef } from "react"

export default function CatFriends() {
  let firstCatRef = useRef(null)
  let secondCatRef = useRef(null)
  let thirdCatRef = useRef(null)

  function handleScrollToFirstCat(){
   firstCatRef.current.scrollIntoView({
     behavior:"smooth",
     block:'nearest',
     inline:'center'
   })
  }
  function handleScrollToSecondCat(){
  secondCatRef.current.scrollIntoView({
    behavior:'smooth',
    block:'nearest',
    inline:'center'
  })
  }
  function handleScrollToThirdCat(){
  thirdCatRef.current.scrollIntoView({
    behavior:'smooth',
    block:'nearest',
    inline:'center'
  })
  }

  return (
    <div id="div-parent">
      <nav>
        <button onClick={handleScrollToFirstCat}>
         Neo
      </button>
      <button onClick={handleScrollToSecondCat}>
         Millie
      </button>
      <button onClick={handleScrollToThirdCat}>
         Bella
      </button>
      </nav>

      <div id="div">
        <ul>
          <li>
            <img src="https://placecats.com/neo/300/200"
                 alt="neo"
                 ref={firstCatRef}
              />
          </li>
          <li>
            <img src="https://placecats.com/millie/200/200"
                 alt="miilie" 
                 ref={secondCatRef}
              />
          </li>
          <li>
            <img src="https://placecats.com/bella/199/200"
                 alt="bella" 
                 ref={thirdCatRef}
              />
          </li>
        </ul>
      </div>
    </div>
  )
}


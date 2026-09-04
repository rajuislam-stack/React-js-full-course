
import { useRef } from "react"

export default function CatFriends() {
  let catRef1 = useRef(null)
  let catRef2 = useRef(null)
  let catRef3 = useRef(null)

  function handleScrollToFirstCat(){
    catRef1.current.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline:'center'
    })
  }
  function handleScrollToSecondCat(){
     catRef2.current.scrollIntoView({
      behavior:'smooth',
      block:'nearest',
      inline:"center"
     })
  }
  function handleScrollToThirdCat(){
  catRef3.current.scrollIntoView({
    behavior:'smooth',
    block:'nearest',
    inline:"center"
  })
  }

  return (
    <>
      <nav>
        <button  onClick={handleScrollToFirstCat}>Neo</button>
        <button onClick={handleScrollToSecondCat}>Millie</button>
        <button onClick={handleScrollToThirdCat}>Bella</button>
      </nav>

       <div>
        <ul>
        <li>
          <img 
            src="https://placecats.com/neo/300/200" 
            alt="Neo"
            ref={catRef1}
           />
        </li>
        <li>
          <img 
            src="https://placecats.com/millie/200/200" 
            alt="millie"
            ref={catRef2}
           />
        </li>
        <li>
          <img 
            src="https://placecats.com/bella/199/200" 
            alt="bella"
            ref={catRef3}
           />
        </li>
      </ul>
       </div>
    </>
  )
}

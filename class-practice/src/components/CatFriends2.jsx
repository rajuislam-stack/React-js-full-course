//Managing a list of refs using a callback function

import { useRef, useState } from "react";


export default function CatFriends2() {
  const [catList, setCatList] = useState(getCatList())
  const inputRef = useRef( new Map());

  
 
const catListElementsArr = catList.map((cat)=>{
    return (
      <li 
      key={cat.id}
      ref={(nodeElement)=>{        //Ref callback

        let map = inputRef.current;
        map.set(cat, nodeElement);

        return ()=>{
          map.delete(cat);        //Clean up function
        }
      }}
      >
         <img src={cat.imgUrl}/>
      </li>
    )
})
  
function scrollToCat(catObj){
  let nodeElement = inputRef.current.get(catObj);
  nodeElement.scrollIntoView({
    behavior:'smooth',
    block:'nearest',
    inline:'center'
  })
} 
  
  return (
    <>
      <h1>Ref CallBack</h1>
      <nav>
        <button onClick={()=> scrollToCat(catList[4])}>Neo</button>
        <button onClick={()=> scrollToCat(catList[7])}>Millie</button>
        <button onClick={()=> scrollToCat(catList[9])}>Bella</button>
      </nav>
      
      <div>
       <ul>
        {catListElementsArr}
      </ul>
      </div>
    </>
  )
}


 
function getCatList(){
  let catCount = 10;
  const catListArr = new Array();
  let imageUrl;

  for(let i = 0; i < catCount; i ++){
    if(i < 5){
      imageUrl = "https://placecats.com/neo/320/240";
    }
    else if( i < 8){
        imageUrl = "https://placecats.com/millie/320/240";
    }
    else{
      imageUrl = "https://placecats.com/bella/320/240";
    }

    catListArr[i] = {
      id: i,
      imgUrl: imageUrl
    }
  }

  return catListArr;
   
}


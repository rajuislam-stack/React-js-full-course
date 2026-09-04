//Updating objects inside arrays

import { useState } from "react";
import ItemList from "./ItemList";

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleToggleMyList(id , NextSeen){
   let nextMyList =  myList.map(list =>{
        if(list.id == id){
          return {...list, seen: NextSeen}
        }
        else{
          return list;
        }
      })

      setMyList(nextMyList)
  }

  function handleToggleYourList(id, NextSeen){
        let nextYourList = yourList.map(list=>{
          if(list.id == id){
            return {...list, seen: NextSeen}
          }
          else{
            return list;
          }
        })
        setYourList(nextYourList);
  }

  return (
    <>
    <h1>Art Bucket List</h1>
    <h2>My list of art to see:</h2>
    <ItemList
    artworks = {myList}
    onToggle= {handleToggleMyList} />

    <h2>Your list of art to see:</h2>
    <ItemList
    artworks = {yourList}
    onToggle = {handleToggleYourList} />
    </>
  )
}

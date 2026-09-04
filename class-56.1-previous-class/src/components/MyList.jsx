

export default function MyList() {

 const items = ['Apple', 'Banana', 'Cherry']
 
  return (        //Rendaring Lists
    <>
    { items.map((item) => {
      return <li key={item} >{item}</li>
    }) }
    </>
  )
}

import Avatar from "./Avatar"

function Cart({children}){
  return (
    <div>{children}</div>
  )
}        

export default function Profile() {
  return (
    <div>
       <Cart>     {/*Passing JSX as children*/}
        <Avatar     
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}       
        />
       </Cart>
    </div>
  )
}

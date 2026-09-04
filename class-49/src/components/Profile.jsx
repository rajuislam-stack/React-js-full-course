//Displaying data

const user = {
  userName: "Heddy Lammar",
  imgUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imgSize:90
}

export default function Profile(){
  return (
     <>
     <h1>{user.userName}</h1>
     <img 
     className="Avater"
     src={user.imgUrl} alt={"image of " + user.userName}
    style={{
      widow:user.imgSize,
      height:user.imgSize,
    }}
     />
     </>
  )
}
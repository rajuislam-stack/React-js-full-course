
 function Greetings(x) {
 if(x.isLogin == 'true'){
  return <h1>Welcome Back!</h1> // Conditional Rendaring
 }

 return <h1>Please Sign Up!</h1>
}


export default Greetings ;
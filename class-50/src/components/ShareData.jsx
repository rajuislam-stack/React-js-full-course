//Sharing data between components by using props 

export default function ShareData({counts,handlefn}) {
  return (
    <>
    <button onClick={handlefn}>You have clicked {counts} times</button>
    </>
  );
}


//Note:Props are data passed from a parent component to a child component in React.
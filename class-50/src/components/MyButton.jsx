//Responding to events

export default function MyButton() {
  function clickhandler() {
    return alert("You Clicked me!");
  }

  return (
    <>
      <button onClick={clickhandler}>Click me</button>
    </>
  );
}

//Class-50 //Tic-Tac-Toe-Game Part-01

function Square({data}) {
  return (
    <>
      <button className="border pl-1.5 pr-1.5">{data}</button>
    </>
  );
}

export default function Board() {
  return (
    <div className="m-3">
      <div>
        <Square data="x"/>
        <Square data="o"/>
        <Square data="x"/>
      </div>
      <div>
        <Square data="x"/>
        <Square data="o"/>
        <Square data="x"/>
      </div>
      <div>
        <Square data="o"/>
        <Square data="x"/>
        <Square data="o"/>
      </div>
    </div>
  );
}

//Note:

//1.To create a react project run "npm create vite @latest(project name or dot(.))"
//2. For installing tailwindcss in your project run the command "npm install tailwindcss @tailwindcss/vite" in your terminal.

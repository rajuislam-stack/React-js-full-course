 export default function Square({value,onSquareClick}) {
  
  return (
    <> 
      <button  onClick={onSquareClick} className="border w-12 h-12 text-2xl">
        {value}
      </button>
    </>
  );
}


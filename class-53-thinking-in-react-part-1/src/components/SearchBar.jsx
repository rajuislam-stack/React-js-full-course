
export default function SearchBar() {
  return (
    <div className="m-8">

      <div>
        <input type="search" name="" id="" className="border-2 rounded-[5px] p-0.5" placeholder="Search..." />
      </div>

      <div>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="m-1">only show products in stocks</label>
      </div>

    </div>
  );
}


export default function SearchBar({filterText, inStockOnly,onFilterTextChange,onInStockOnlyChange}) {
  return (
    <div className="m-8">
      <div>
        <input
          type="search"
          className="border-2 rounded-[5px] p-0.5"
          placeholder="Search..."
          value={filterText}
          onChange={(e)=> onFilterTextChange(e.target.value)}
        />
      </div>

      <div>
        <input type="checkbox" id="check" checked={inStockOnly} onChange={(e)=> onInStockOnlyChange(e.target.checked)}/>
        <label htmlFor="check" className="m-1">
          only show products in stocks
        </label>
      </div>
    </div>
  );
}


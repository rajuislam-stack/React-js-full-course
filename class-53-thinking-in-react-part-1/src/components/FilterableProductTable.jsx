import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({products}) {
  return (
    <div className="w-80">
      <SearchBar/>
      <ProductTable products={products}/>
    </div>
  )
}

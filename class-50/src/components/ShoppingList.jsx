//Rendering lists

const products = [
  { title: "Barger", isFruit: false, id: 1 },
  { title: "Pizza", isFruit: false, id: 2 },
  { title: "Benana", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

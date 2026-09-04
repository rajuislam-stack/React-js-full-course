
export default function ProductRow({product}) {
  let name = product.stocked ? product.name : <span className="text-red-500">{product.name}</span>
  
  return (
      <>
          <tr>
            <td>{name}</td>
            <td>{product.price}</td>
          </tr>
      </>
  );
}

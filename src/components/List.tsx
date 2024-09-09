import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Product } from "../types/Products"; // Import the existing Product type

import DropDownFilter from "./DropDownFilter";
// Define props interface for List component
interface ListProps {
  products: Product[];
}

function List({ products }: ListProps): JSX.Element {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (id: string) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">Products</h1>
      <DropDownFilter />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  p-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border border-black rounded-xl hover:shadow-lg"
            onClick={() => handleClick(product.id.toString())}
          >
            <figure className="p-4">
              <div className="flex justify-center items-center ">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-1/2 h-auto object-contain"
                />
              </div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold">
                {product.title}
                <div className="badge badge-secondary">{product.rating}</div>
              </h2>
              <p className="font-bold text-lg">£{product.price}</p>

              <div className="card-actions justify-end mt-4">
                {product.tags.slice(0, 2).map((tag, index) => (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

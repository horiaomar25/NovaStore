import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useProducts } from "../hooks/useProducts"; // Adjust import as needed
import { Product } from "../types/Products"; // Import the existing Product type
import addtocard from "../assets/addtocart.png";
import DropDownFilter from "./DropDownFilter";

const ProductList: React.FC = () => {
  const { categories, products, loading, error } = useProducts();
  const navigate = useNavigate(); // Initialize useNavigate

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const allProducts: Product[] = categories.flatMap(
    (category) => products[category.slug] || []
  );

  const handleClick = (id: string) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">Products</h1>
      <DropDownFilter />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  p-10">
        {allProducts.map((product) => (
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
              <img src={addtocard} className="w-8 mb-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

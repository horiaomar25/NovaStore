import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Product } from '../types/Products';

interface ProductDetailProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {/* Product Image */}
      <div className="mt-5 mb-8">
        <figure className="p-4">
          <div className="w-full h-auto overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
             
            />
          </div>
        </figure>
      </div>

      {/* Product Details */}
      <div className="m-4 mt-10">
        <h3 className="text-2xl font-bold mb-6">{product.title}</h3>
        <p className="font-bold text-xl mb-6">£{product.price}</p>
        <p className="mb-6">{product.description}</p>

        <div className="flex items-center xs:justify-center   space-x-2 mb-6">
          <button
            onClick={handleDecrease}
            className="border border-black text-black py-2 px-4 rounded-lg  hover:bg-black hover:text-white"
          >
            -
          </button>
          <input
            type="text"
            className="w-20 h-10 text-center border border-black-300 rounded-lg py-1"
            value={quantity}
            readOnly
          />
          <button
            onClick={handleIncrease}
            className="border border-black text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white"
          >
            +
          </button>
        </div>

        <Link to="/productlist">
          <button className="border border-black text-black py-2 px-4 rounded-lg w-full  lg:w-11/12 text-center mt-3 hover:bg-black hover:text-white ">
            Add to cart
          </button>
        </Link>

        {/* Product Rating */}
        <div className="lg:mt-6 mb-4 mt-4 flex items-center">
          {[...Array(Math.round(product.rating))].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
            </svg>
          ))}
          {Array(5 - Math.round(product.rating))
            .fill(null)
            .map((_, i) => (
              <svg
                key={i + Math.round(product.rating)}
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
              </svg>
            ))}
          <p className="ml-2">{product.rating}</p>
        </div>

        <div className="lg:mt-28 flex flex-wrap ">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;

// src/components/ProductDetail.tsx
import React from "react";
import { Product } from "../types/Products"; // Adjust import path as needed
import { Link } from "react-router-dom";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <figure className="p-4">
        <div className="w-full h-auto overflow-hidden ">
          <img
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
          />
        </div>
      </figure>
      <h3 className="text-lg font-bold m-4">{product.title}</h3>
      <p className="font-bold text-xl m-4">£{product.price}</p>
      <div className="p-4">
        <p className="m-0">{product.description}</p>

        <Link to="/productlist">
          <button className="border border-black text-black py-2 px-4 rounded-lg w-full text-center mt-3 hover:lg:bg-black hover:lg:text-white ">
            Add to cart
          </button>
        </Link>

        <div className="mt-4">
          <span className="badge badge-secondary">
            Rating: {product.rating}
          </span>
        </div>
        <div className="mt-4">
          {product.tags.map((tag, index) => (
            <span key={index} className="badge badge-outline mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

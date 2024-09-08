// src/components/ProductDetail.tsx
import React from 'react';
import { Product } from '../types/Products'; // Adjust import path as needed

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-4">{product.title}</h1>
      <figure className="p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </figure>
      <div className="p-4">
        <p className="font-bold text-xl">£{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <div className="mt-4">
          <span className="badge badge-secondary">Rating: {product.rating}</span>
        </div>
        <div className="mt-4">
          {product.tags.map((tag, index) => (
            <span key={index} className="badge badge-outline mr-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

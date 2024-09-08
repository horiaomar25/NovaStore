// src/pages/ProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/Products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err: unknown) {
        setError('Failed to fetch product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

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

export default ProductPage;

import React from "react";
import { useProducts } from "../hooks/useProducts";
import List from "../components/List";

const ProductList: React.FC = () => {
  const { categories, products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const allProducts = categories.flatMap(
    (category) => products[category.slug] || []
  );

  return (
    <>
      <List products={allProducts} />
    </>
  );
};

export default ProductList;

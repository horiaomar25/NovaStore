import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import List from '../components/List'; // Adjust the import as needed
import { Product } from '../types/Products';

const FilteredList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category === 'all' || !category) {
      // If 'all' or no category is specified, show all products
      setFilteredProducts(Object.values(products).flat());
    } else {
      // Filter products by selected category
      setFilteredProducts(products[category] || []);
    }
  }, [category, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <List products={filteredProducts} />;
};

export default FilteredList;

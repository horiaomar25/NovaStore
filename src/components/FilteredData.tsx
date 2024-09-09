import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import List from './List'; // Use List component for displaying products

const FilteredData: React.FC = () => {
  const { category } = useParams<{ category: string }>(); // Get the category from the URL
  const { categories, products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (category) {
      filterProducts(category);
    }
  }, [category, products]);

  const filterProducts = (category: string) => {
    if (category === 'all') {
      setFilteredProducts(Object.values(products).flat());
    } else {
      const categoryProducts = products[category] || [];
      setFilteredProducts(categoryProducts);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <List products={filteredProducts} /> {/* Pass filtered products to List */}
    </div>
  );
};

export default FilteredList;

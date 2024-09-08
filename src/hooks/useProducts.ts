// hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { fetchCategories, fetchProductsByCategory } from '../lib/api';
import { Category, Product } from '../types/Products';

export const useProducts = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Record<string, Product[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true at the start
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);

        const productPromises = fetchedCategories.map(async (category) => {
          try {
            const products = await fetchProductsByCategory(category.url);
            return { [category.slug]: products };
          } catch (error) {
            console.error(`Failed to fetch products for category ${category.slug}`, error);
            return { [category.slug]: [] }; // Return an empty array in case of error
          }
        });

        const productsArray = await Promise.all(productPromises);
        setProducts(productsArray.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
      } catch (error) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false); // Ensure loading is set to false in both success and failure cases
      }
    };

    fetchData();
  }, []);

  return { categories, products, loading, error };
};

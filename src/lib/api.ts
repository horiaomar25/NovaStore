// api.ts
import { Category, Product } from '../types/Products';

const API_URL = 'https://dummyjson.com/products/categories';

// Fetch categories
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(API_URL);
  const categories = await response.json();
  const allowedCategories = ['beauty', 'womens-bags', "fragrances", "womens-bags", "womens-shoes", "womens-watches","tops"];
  return categories.filter((category: Category) => allowedCategories.includes(category.slug));
};

// Fetch products for a category
export const fetchProductsByCategory = async (url: string): Promise<Product[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data.products; // Ensure that the `data.products` path matches the API response
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Product not found');
  }
  const productData: Product = await response.json();
  
  // Ensure that `reviews` is always an array
  return {
    ...productData,
    reviews: productData.reviews || [], // Default to empty array if undefined
  };
};


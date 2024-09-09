import { fetchProductsByCategory } from "../lib/api"
import { Product } from '../types/Products'

const FilterProducts = async (category: string): Promise<Product[]> => {
  const url = `https://api.example.com/products?category=${category}`; // Replace with your API URL and parameters
  const products = await fetchProductsByCategory(url);
  console.log(products)
  return products;
}

export default FilterProducts
import React from "react";
import { Product } from "../types/Products"; // Adjust import path as needed

import ReviewSection from "./Review";
import ProductDescription from "./ProductDescription";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
    
        <ProductDescription product={product}/>
      
      <ReviewSection reviews={product.reviews} />
    </section>
  );
};

export default ProductDetail;


import { Product } from "../types/Products"; // Adjust import path as needed
import ProductDescription from "./ProductDescription";
import ReviewSection from "./Review";

interface ProductDetailProps {
  product: Product;
}

function ProductDetail({ product }: ProductDetailProps): JSX.Element  {
  return (
    <><section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ProductDescription product={product} />

    </section><ReviewSection reviews={product.reviews} /></>
  );
};

export default ProductDetail;

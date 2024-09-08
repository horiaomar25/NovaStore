import React from 'react'
import { Link } from "react-router-dom";
import { Product } from '../types/Products';


interface ProductDetailProps {
    product: Product;
  }

const ProductDescription:React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <>
     {/* Product Image */}
     <div className="mt-5">
     <figure className="p-4">
       <div className="w-full h-auto overflow-hidden">
         <img
           src={product.thumbnail}
           alt={product.title}
           width={500}
           height={500}
         />
       </div>
     </figure>
   </div>

   {/* Product Details */}
   <div className="m-4">
     <h3 className="text-lg font-bold mb-4">{product.title}</h3>
     <p className="font-bold text-xl mb-4">£{product.price}</p>
     <p className="mb-4">{product.description}</p>

     <Link to="/productlist">
       <button className="border border-black text-black py-2 px-4 rounded-lg w-full text-center mt-3 hover:bg-black hover:text-white lg:w-1/4">
         Add to cart
       </button>
     </Link>

     <div className="flex items-center space-x-2 mt-4">
       <button
         id="decrease"
         className="bg-gray-200 text-gray-800 hover:bg-gray-300 p-2 rounded border border-gray-400"
       >
         -
       </button>
       <input
         type="text"
         id="quantity"
         className="w-12 text-center border border-gray-300 rounded py-1"
         value="0"
       />
       <button
         id="increase"
         className="bg-gray-200 text-gray-800 hover:bg-gray-300 p-2 rounded border border-gray-400"
       >
         +
       </button>
     </div>

     {/* Product Rating */}
     <><div className="mt-4 flex items-center">
    {[...Array(Math.round(product.rating))].map((_, i) => (
        <svg
            key={i}
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
        </svg>
    ))}
    {Array(5 - Math.round(product.rating))
        .fill(null)
        .map((_, i) => (
            <svg
                key={i + Math.round(product.rating)}
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
            </svg>
        ))}
    <p className="mr-2">{product.rating}</p>
</div><div className="mt-4 flex flex-wrap">
        {product.tags.map((tag, index) => (
            <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2 mb-2"
            >
                {tag}
            </span>
        ))}
    </div></>

     
   </div>
   </>
  )
}

export default ProductDescription
import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../types/ProductCart";

interface SideCartProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
}

const SideCart: React.FC<SideCartProps> = ({
  isOpen,
  toggleCart,
  cartItems,
  removeFromCart,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-96 h-screen bg-white z-50 shadow-lg transition-transform duration-300   ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col h-full w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={toggleCart} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p>£{item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-black border border-red bg-white hover:bg-red-500 hover: p-2 rounded-md"
                  >
                   Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Checkout Button */}
        <div className="p-4 border-t mt-auto">
        <Link to='/checkout'>  <button className="border border-black text-black py-2 px-4 rounded-lg w-full text-center mt-3 hover:bg-black hover:text-white">
            Go to checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;

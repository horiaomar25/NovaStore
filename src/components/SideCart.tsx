import React from 'react';

// Define prop types
interface SideCartProps {
  isOpen: boolean;
  toggleCart: () => void;
}

function SideCart({ isOpen, toggleCart}: SideCartProps): JSX.Element {
  return (
    <div
      className={`fixed top-0 right-0 w-96 h-screen bg-white z-50 shadow-lg transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={toggleCart} className="text-2xl font-bold">
            &times;
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Replace with your list of items */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideCart;

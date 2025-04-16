import { useState, useEffect } from 'react';

// Define the ProductCart and CartItem types
interface ProductCart {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface CartItem extends ProductCart {
  quantity: number;
}

const useCart = () => {
  // Initialize cartItems from localStorage with error handling
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart items from localStorage', error);
      return [];
    }
  });

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Return cart functionality
  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;

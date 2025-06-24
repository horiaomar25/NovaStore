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

const CART_EVENT = 'cartUpdated'; // custom browser event for cart updates

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
    const handleCartUpdate = () => {
      try {
        const storedCart = localStorage.getItem('cart');
        setCartItems(storedCart ? JSON.parse(storedCart) : []);
      } catch {
        setCartItems([]);
       
      }

    };
    window.addEventListener(CART_EVENT, handleCartUpdate);
    return () => window.removeEventListener(CART_EVENT, handleCartUpdate);
    
  }, []);
  
  // Save cartItems to localStorage and notify other components whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event(CART_EVENT));
  }, [cartItems]);

  const addToCart = (product: ProductCart, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

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

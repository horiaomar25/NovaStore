import { useState } from 'react';
import { ProductCart } from '../types/ProductCart'; // Adjust import path as needed

interface CartItem extends ProductCart {
    quantity: number; // Corrected spelling
}

const useCart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

    const getCartItems = () => {
        return cartItems;
    };

    return {
        cartItems,
        addToCart,
        removeFromCart,
        getCartItems,
    };
};

export default useCart;

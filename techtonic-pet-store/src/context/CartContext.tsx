import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    updateQuantity: (productId: string, quantity: number) => void;
    totalItems: number;
    total: number;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product, quantity = 1) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...currentCart, { ...product, quantity }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        setCart(currentCart => {
            if (quantity <= 0) {
                return currentCart.filter(item => item.id !== productId);
            }
            return currentCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
        });
    };

    const clearCart = () => setCart([]);
    const toggleCart = () => setIsCartOpen(prev => !prev);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            updateQuantity,
            totalItems,
            total,
            isCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

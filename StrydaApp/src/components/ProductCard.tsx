import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-surface-dark group">
            <div className="relative aspect-square overflow-hidden bg-white/5">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={product.image}
                        alt={product.name}
                    />
                </Link>
                {product.badge && (
                    <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
                        {product.badge}
                    </span>
                )}
            </div>
            <div className="p-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{product.category}</p>
                <Link to={`/product/${product.id}`} className="block">
                    <h4 className="font-bold text-lg mb-2 uppercase group-hover:text-primary transition-colors">
                        {product.name}
                    </h4>
                </Link>
                <p className="text-primary font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-white text-black font-bold py-3 uppercase tracking-widest text-sm hover:bg-primary transition-colors rounded-none"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

interface ProductCardProps {
    product: Product;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
    const { addToCart } = useCart();

    return (
        <div className={cn("group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col", className)}>
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>
                {product.badge && (
                    <span className={cn(
                        "absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full tracking-wider",
                        product.badge === 'NEW' ? "bg-secondary text-text-dark" : "bg-primary text-text-dark"
                    )}>
                        {product.badge}
                    </span>
                )}

                <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary text-text-dark"
                    aria-label="Add to cart"
                >
                    <ShoppingBag size={20} />
                </button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-2 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs text-gray-500 font-medium ml-1">{product.rating}</span>
                </div>

                <Link to={`/products/${product.id}`} className="block mb-2">
                    <h3 className="font-display font-bold text-lg text-text-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between">
                    <span className="font-body font-bold text-xl text-text-dark">${product.price.toFixed(2)}</span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{product.category}</span>
                </div>
            </div>
        </div>
    );
};

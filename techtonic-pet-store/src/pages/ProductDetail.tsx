import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, Plus, Minus, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = React.useState(1);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-white pt-12 pb-24">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-primary transition-colors">Shop</Link>
                    <span>/</span>
                    <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
                    <span>/</span>
                    <span className="text-text-dark">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image */}
                    <div className="relative rounded-[3rem] overflow-hidden bg-gray-50 aspect-square shadow-inner">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply"
                        />
                        {product.badge && (
                            <span className="absolute top-8 left-8 px-4 py-2 bg-secondary text-text-dark font-bold rounded-full text-sm tracking-wide">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    {/* Info */}
                    <div className="space-y-8 py-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-xs font-bold uppercase",
                                    product.category === 'Food' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                                )}>{product.category}</span>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i >= Math.floor(product.rating) ? "text-gray-300" : ""} />
                                    ))}
                                    <span className="ml-2 text-gray-400 text-xs font-medium">(128 reviews)</span>
                                </div>
                            </div>
                            <h1 className="text-5xl font-display font-extrabold text-text-dark leading-tight mb-4">{product.name}</h1>
                            <p className="text-xl font-body text-gray-500 leading-relaxed">{product.description}</p>
                        </div>

                        <div className="text-4xl font-bold font-display text-text-dark">
                            ${(product.price * quantity).toFixed(2)}
                            {quantity > 1 && <span className="text-lg text-gray-400 font-normal ml-2">(${product.price}/ea)</span>}
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center bg-gray-100 rounded-full p-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 hover:bg-white rounded-full transition-colors shadow-sm disabled:opacity-50"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 hover:bg-white rounded-full transition-colors shadow-sm"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="flex-1 py-4 bg-primary rounded-full font-bold text-lg text-text-dark shadow-lg shadow-yellow-200 hover:shadow-yellow-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                        </div>

                        <hr className="border-gray-100" />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <Truck className="text-secondary w-6 h-6 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm">Free Shipping</h5>
                                    <p className="text-xs text-gray-500 mt-1">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-secondary w-6 h-6 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm">Satisfaction Guarantee</h5>
                                    <p className="text-xs text-gray-500 mt-1">30 days return policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

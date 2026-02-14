import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Truck, Shield, Check } from 'lucide-react';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();
    const [selectedFlavor, setSelectedFlavor] = useState('Blue Raz');

    if (!product) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-black uppercase italic mb-4">Product Not Found</h2>
                    <Link to="/products" className="text-primary font-bold uppercase tracking-widest hover:underline">Back to Shop</Link>
                </div>
            </div>
        );
    }

    // Determine if product needs flavor selection (Supplements only)
    const hasFlavors = product.category === 'supplements';

    return (
        <div className="bg-background-dark min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <nav className="mb-8 md:mb-12">
                    <ol className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li className="text-primary/40">/</li>
                        <li><Link to={`/products?category=${product.category}`} className="hover:underline">{product.category}</Link></li>
                        <li className="text-primary/40">/</li>
                        <li className="text-white truncate max-w-[200px]">{product.name}</li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Image */}
                    <div className="lg:col-span-7">
                        <div className="relative group bg-surface-dark p-8 md:p-12 aspect-square flex items-center justify-center border border-white/5 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            />
                            <div className="absolute bottom-8 left-8 border-l-2 border-primary pl-4">
                                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Stryda Authentic</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">Verified Quality</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white italic">
                                {product.name}
                            </h1>
                            <p className="mt-4 text-primary font-bold tracking-[0.3em] text-sm italic">PREMIUM {product.category}</p>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-black text-primary text-glow italic tracking-tighter">${product.price.toFixed(2)}</span>
                        </div>

                        <p className="text-white/70 leading-relaxed font-light">
                            {product.description}
                        </p>

                        <div className="space-y-6">
                            {/* Flavor Selection (Conditional) */}
                            {hasFlavors && (
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3 block">Select Flavor // 01</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['Blue Raz', 'Watermelon', 'Fruit Punch'].map((flavor) => (
                                            <button
                                                key={flavor}
                                                onClick={() => setSelectedFlavor(flavor)}
                                                className={`px-6 py-3 border-2 font-black uppercase text-xs tracking-widest transition-all ${selectedFlavor === flavor
                                                        ? 'border-primary bg-primary text-black'
                                                        : 'border-white/10 hover:border-primary/50 text-white'
                                                    }`}
                                            >
                                                {flavor}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CTAs */}
                        <div className="space-y-3 pt-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-primary py-5 text-black font-black uppercase tracking-[0.2em] text-lg hover:bg-white transition-colors duration-300"
                            >
                                ADD TO CART
                            </button>
                            <div className="flex items-center justify-center gap-2 text-white/40 py-2">
                                <Truck className="w-4 h-4" />
                                <span className="text-[10px] uppercase tracking-widest font-bold">Free Shipping over $75</span>
                            </div>
                        </div>

                        {/* Features/Highlights */}
                        <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="bg-white/5 p-3 rounded-full"><Shield className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <h5 className="font-bold uppercase text-sm mb-1">Clinic Dosing</h5>
                                    <p className="text-xs text-white/50">Formulated with scientifically backed ingredients at effective dosages.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-white/5 p-3 rounded-full"><Check className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <h5 className="font-bold uppercase text-sm mb-1">No Banned Substances</h5>
                                    <p className="text-xs text-white/50">Safe for competition. Tested for purity and potency.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

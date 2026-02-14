import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Shield, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            clearCart();
            navigate('/success');
        }, 1500);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center bg-background-dark">
                <div className="text-center">
                    <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Your Cart is Empty</h2>
                    <button onClick={() => navigate('/products')} className="text-primary font-bold uppercase tracking-widest hover:underline">Return to Shop</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-dark min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-white">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Shipping Info */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                                    <span className="bg-primary text-black w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                                    Shipping Details
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input required name="firstName" placeholder="First Name" onChange={handleChange} className="bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <input required name="lastName" placeholder="Last Name" onChange={handleChange} className="bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <input required name="email" type="email" placeholder="Email Address" onChange={handleChange} className="col-span-2 bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <input required name="address" placeholder="Street Address" onChange={handleChange} className="col-span-2 bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <input required name="city" placeholder="City" onChange={handleChange} className="bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <input required name="zip" placeholder="ZIP Code" onChange={handleChange} className="bg-surface-dark border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                </div>
                            </section>

                            {/* Payment Info */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                                    <span className="bg-primary text-black w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                                    Payment
                                </h3>
                                <div className="bg-surface-dark p-6 border border-white/10 space-y-4">
                                    <div className="flex items-center gap-2 mb-4 text-green-400 text-xs uppercase tracking-widest font-bold">
                                        <Lock className="w-3 h-3" /> Secure SSL Connection
                                    </div>
                                    <input required name="cardNumber" placeholder="Card Number" onChange={handleChange} className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input required name="expiry" placeholder="MM/YY" onChange={handleChange} className="bg-black/50 border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                        <input required name="cvc" placeholder="CVC" onChange={handleChange} className="bg-black/50 border border-white/10 p-4 text-white placeholder-white/40 focus:border-primary outline-none" />
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="w-full bg-primary py-5 text-black font-black uppercase tracking-[0.2em] text-lg hover:bg-white transition-colors duration-300">
                                Place Order // ${(total + 9.99).toFixed(2)}
                            </button>
                        </form>
                    </div>

                    {/* Summary Section */}
                    <div className="lg:col-span-5">
                        <div className="bg-surface-dark p-8 border border-white/10 sticky top-24">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-6">Order Summary</h3>
                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-white/5 p-2 flex items-center justify-center">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-white">{item.name}</h4>
                                            <p className="text-primary text-xs font-bold mt-1">${item.price.toFixed(2)} x {item.quantity}</p>
                                        </div>
                                        <div className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-white/10 text-sm">
                                <div className="flex justify-between text-white/60">
                                    <span>Subtotal</span>
                                    <span className="font-bold">${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-white/60">
                                    <span>Shipping</span>
                                    <span className="font-bold">$9.99</span>
                                </div>
                                <div className="flex justify-between text-xl font-black italic text-white pt-4 border-t border-white/10">
                                    <span>Total</span>
                                    <span className="text-primary">${(total + 9.99).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-xs text-white/40">
                                <Shield className="w-4 h-4" />
                                <p>100% Satisfaction Guarantee. Returns accepted within 30 days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

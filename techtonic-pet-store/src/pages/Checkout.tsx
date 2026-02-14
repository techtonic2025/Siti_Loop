import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckoutForm } from '../components/CheckoutForm';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, total } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
                <h1 className="text-3xl font-display font-bold mb-4">Your cart is empty</h1>
                <Link to="/products" className="px-8 py-3 bg-primary rounded-full font-bold">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center gap-2 mb-8 text-gray-500 hover:text-text-dark w-fit transition-colors">
                    <ArrowLeft size={20} />
                    <Link to="/products" className="font-bold">Continue Shopping</Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-display font-bold">Shopping Cart</h2>
                                <span className="text-gray-400 font-medium">{cart.length} items</span>
                            </div>

                            <div className="space-y-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-6 py-4 border-b border-gray-50 last:border-0">
                                        <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-lg text-text-dark">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.category}</p>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition-colors">
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center bg-gray-50 rounded-lg p-1">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors font-bold text-gray-500">-</button>
                                                    <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors font-bold text-gray-500">+</button>
                                                </div>
                                                <span className="font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-display font-bold mb-6">Shipping Details</h2>
                            <CheckoutForm onSuccess={() => navigate('/success')} />
                        </section>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-display font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-text-dark">${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-500 font-bold">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes (est.)</span>
                                    <span className="font-bold text-text-dark">${(total * 0.08).toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-6 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-display font-extrabold text-3xl">${(total * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-xl">
                                <Lock size={12} />
                                Secure SSL Encryption
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

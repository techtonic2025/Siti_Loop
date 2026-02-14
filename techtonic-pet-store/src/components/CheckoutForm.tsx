import React from 'react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { CheckCircle } from 'lucide-react';

export const CheckoutForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const { total, clearCart } = useCart();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        clearCart();
        setIsLoading(false);
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">First Name</label>
                    <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">Last Name</label>
                    <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-bold text-gray-700">Shipping Address</label>
                <input required type="text" id="address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="123 Pet Street" />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-bold text-gray-700">City</label>
                    <input required type="text" id="city" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="zip" className="block text-sm font-bold text-gray-700">Postal Code</label>
                    <input required type="text" id="zip" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1",
                    isLoading ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-primary text-text-dark hover:bg-yellow-300"
                )}
            >
                {isLoading ? (
                    <span className="animate-pulse">Processing Order...</span>
                ) : (
                    <>
                        <CheckCircle className="w-5 h-5" />
                        Confirm Order (${total.toFixed(2)})
                    </>
                )}
            </button>
        </form>
    );
};

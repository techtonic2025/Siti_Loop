import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderSuccess: React.FC = () => {
    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FCD34D', '#6EE7B7', '#FFFBEB']
        });
    }, []);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md w-full">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                </div>

                <h1 className="text-4xl font-display font-extrabold mb-4 text-text-dark">Order Confirmed!</h1>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                    Thank you for your purchase. We've sent a confirmation email to your inbox.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl mb-8 text-left">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                        <span className="text-sm font-bold text-gray-500">Order Number</span>
                        <span className="font-mono font-bold text-text-dark">#PET-{Math.floor(Math.random() * 100000)}</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <Mail size={20} className="text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Check your email</h4>
                            <p className="text-xs text-gray-500 mt-1">We'll send updates about your shipping status there.</p>
                        </div>
                    </div>
                </div>

                <Link
                    to="/"
                    className="w-full py-4 bg-primary rounded-xl font-bold text-text-dark shadow-lg shadow-yellow-200 hover:shadow-yellow-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <Home size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

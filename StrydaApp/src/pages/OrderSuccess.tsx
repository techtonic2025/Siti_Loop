import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const OrderSuccess: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-6">
            <div className="text-center max-w-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
                    <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6">
                    Order Confirmed
                </h1>
                <p className="text-white/60 text-lg mb-12">
                    Thank you for choosing Stryda. Your gear is pending dispatch. You will receive a confirmation email shortly.
                </p>
                <Link to="/" className="inline-block bg-white text-black py-4 px-8 font-black uppercase tracking-[0.2em] hover:bg-primary transition-colors">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

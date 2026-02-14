import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Camera, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black pt-20 pb-10 relative overflow-hidden carbon-texture border-t border-white/5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none select-none">
                <h1 className="text-[25vw] font-bold leading-none tracking-tighter text-white">STRYDA</h1>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary mb-8 block">STRYDA</Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Defying mediocrity. Fueling the elite. We are the architects of your peak performance.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Camera className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-primary">Shop</h4>
                        <ul className="space-y-4 text-sm text-white/60 uppercase tracking-wide">
                            <li><Link to="/products?category=supplements" className="hover:text-white transition-colors">Supplements</Link></li>
                            <li><Link to="/products?category=apparel" className="hover:text-white transition-colors">Apparel</Link></li>
                            <li><Link to="/products?category=gear" className="hover:text-white transition-colors">Equipment</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Bundles</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-primary">Support</h4>
                        <ul className="space-y-4 text-sm text-white/60 uppercase tracking-wide">
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-primary">Company</h4>
                        <ul className="space-y-4 text-sm text-white/60 uppercase tracking-wide">
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Ambassadors</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-xs tracking-widest uppercase">© 2024 STRYDA PERFORMANCE. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-4 opacity-50">
                        {/* Simple placeholder icons for payments or we can use text */}
                        <span className="text-xs text-white/50 uppercase">VISA</span>
                        <span className="text-xs text-white/50 uppercase">MASTERCARD</span>
                        <span className="text-xs text-white/50 uppercase">PAYPAL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

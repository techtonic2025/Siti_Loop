import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, PawPrint } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                                <PawPrint className="w-6 h-6 text-text-dark" />
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">Techtonic<span className="text-primary">Pets</span></span>
                        </Link>
                        <p className="text-gray-400 font-body leading-relaxed max-w-sm">
                            Premium nutrition and smart accessories for your furry family members. Bringing technology and love together.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={20} />, href: "#" },
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Twitter size={20} />, href: "#" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-text-dark transition-all duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-primary">Shop</h4>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li><Link to="/products?category=Food" className="hover:text-white hover:translate-x-1 transition-all inline-block">Food & Treats</Link></li>
                            <li><Link to="/products?category=Toys" className="hover:text-white hover:translate-x-1 transition-all inline-block">Toys & Play</Link></li>
                            <li><Link to="/products?category=Care" className="hover:text-white hover:translate-x-1 transition-all inline-block">Health & Care</Link></li>
                            <li><Link to="/products?category=Accessories" className="hover:text-white hover:translate-x-1 transition-all inline-block">Accessories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-primary">Company</h4>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</Link></li>
                            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Careers</Link></li>
                            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
                            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-primary">Stay in the Loop</h4>
                        <p className="text-gray-400 mb-4 text-sm">Subscribe for new products and VIP offers.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-500"
                            />
                            <button className="w-full px-4 py-3 bg-primary text-text-dark font-bold rounded-xl hover:bg-secondary transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm font-body">
                    <p>&copy; 2024 Techtonic Pet Store. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/" className="hover:text-white transition-colors">Shipping</Link>
                        <Link to="/" className="hover:text-white transition-colors">Returns</Link>
                        <Link to="/" className="hover:text-white transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

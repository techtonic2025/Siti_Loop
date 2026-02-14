import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
    const { totalItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-bold tracking-tighter text-primary">STRYDA</Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
                        <Link to="/products?category=men" className="hover:text-primary transition-colors">Men</Link>
                        <Link to="/products?category=women" className="hover:text-primary transition-colors">Women</Link>
                        <Link to="/products?category=supplements" className="hover:text-primary transition-colors">Supplements</Link>
                        <Link to="/products?category=gear" className="hover:text-primary transition-colors">Gear</Link>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="hover:text-primary hidden sm:block">
                        <Search className="w-6 h-6" />
                    </button>
                    <button className="hover:text-primary hidden sm:block">
                        <User className="w-6 h-6" />
                    </button>
                    <Link to="/checkout" className="hover:text-primary relative group">
                        <ShoppingBag className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <button className="md:hidden hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-white/5 p-6 absolute w-full">
                    <div className="flex flex-col gap-4 text-sm font-bold tracking-widest uppercase">
                        <Link to="/products?category=men" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Men</Link>
                        <Link to="/products?category=women" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Women</Link>
                        <Link to="/products?category=supplements" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Supplements</Link>
                        <Link to="/products?category=gear" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gear</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

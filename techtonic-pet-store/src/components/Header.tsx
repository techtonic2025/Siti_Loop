import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, PawPrint, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';


export const Header: React.FC = () => {
    const { totalItems, toggleCart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                        <PawPrint className="w-6 h-6 text-text-dark" />
                    </div>
                    <span className="font-display font-bold text-2xl text-text-dark tracking-tight">
                        Techtonic<span className="text-secondary">Pets</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="font-body font-medium text-text-dark hover:text-secondary transition-colors">Home</Link>
                    <Link to="/products" className="font-body font-medium text-text-dark hover:text-secondary transition-colors">Shop</Link>
                    <Link to="/products?category=Food" className="font-body font-medium text-text-dark hover:text-secondary transition-colors">Food</Link>
                    <Link to="/products?category=Toys" className="font-body font-medium text-text-dark hover:text-secondary transition-colors">Toys</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/checkout"
                        className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="View Cart"
                    >
                        <ShoppingCart className="w-6 h-6 text-text-dark" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-secondary text-text-dark text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
                    <Link to="/" className="font-body font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">Home</Link>
                    <Link to="/products" className="font-body font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">All Products</Link>
                    <Link to="/products?category=Food" className="font-body font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">Food</Link>
                    <Link to="/products?category=Toys" className="font-body font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">Toys</Link>
                </div>
            )}
        </header>
    );
};

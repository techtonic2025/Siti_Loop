import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { cn } from '../lib/utils';

export const Products: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentCategory = searchParams.get('category') || 'All';
    const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

    const categories = ['All', 'Food', 'Toys', 'Care', 'Accessories'];

    const filteredProducts = useMemo(() => {
        let items = products;

        // Filter
        if (currentCategory !== 'All') {
            items = items.filter(p => p.category === currentCategory);
        }

        // Sort
        return [...items].sort((a, b) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            return 0; // standard order
        });
    }, [currentCategory, sortBy]);

    const handleCategoryChange = (category: string) => {
        if (category === 'All') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-display font-extra-bold mb-4">Shop Products</h1>
                    <p className="text-gray-500">Find everything your pet needs (and wants).</p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 sticky top-24 z-30 bg-[#FAFAFA]/95 backdrop-blur py-4 border-b border-gray-100">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold transition-all",
                                    currentCategory === cat
                                        ? "bg-text-dark text-white shadow-lg scale-105"
                                        : "bg-white text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">
                        <SlidersHorizontal size={18} className="text-gray-400" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-transparent font-bold text-text-dark outline-none cursor-pointer"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 opacity-50">
                        <Filter className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                        <h3 className="text-2xl font-bold mb-2">No products found</h3>
                        <p>Try clearing your filters or checking back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

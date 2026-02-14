import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ArrowUpDown } from 'lucide-react';

export const Products: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const sortOption = searchParams.get('sort') || 'featured';

    const filteredProducts = useMemo(() => {
        let result = products;

        if (categoryFilter) {
            result = result.filter(p => p.category === categoryFilter);
        }

        if (sortOption === 'price-low') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high') {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [categoryFilter, sortOption]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(prev => {
            prev.set('sort', e.target.value);
            return prev;
        });
    };

    const currentCategoryName = categoryFilter ? categoryFilter : 'All Gear';

    return (
        <div className="bg-background-dark min-h-screen py-12">
            <div className="container mx-auto px-6">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Shop // {categoryFilter || 'Catalog'}</p>
                        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">{currentCategoryName}</h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-surface-dark border border-white/10 px-4 py-3">
                            <Filter className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Filter:</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSearchParams({})}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${!categoryFilter ? 'text-primary' : 'text-white/60'}`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setSearchParams({ category: 'supplements' })}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${categoryFilter === 'supplements' ? 'text-primary' : 'text-white/60'}`}
                                >
                                    Supps
                                </button>
                                <button
                                    onClick={() => setSearchParams({ category: 'men' })}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${categoryFilter === 'men' ? 'text-primary' : 'text-white/60'}`}
                                >
                                    Men
                                </button>
                                <button
                                    onClick={() => setSearchParams({ category: 'women' })}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${categoryFilter === 'women' ? 'text-primary' : 'text-white/60'}`}
                                >
                                    Women
                                </button>
                                <button
                                    onClick={() => setSearchParams({ category: 'gear' })}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${categoryFilter === 'gear' ? 'text-primary' : 'text-white/60'}`}
                                >
                                    Gear
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-surface-dark border border-white/10 px-4 py-3">
                            <ArrowUpDown className="w-4 h-4 text-primary" />
                            <select
                                value={sortOption}
                                onChange={handleSortChange}
                                className="bg-transparent border-none text-xs font-bold uppercase tracking-widest text-white focus:ring-0 cursor-pointer py-0 pr-8"
                            >
                                <option value="featured" className="bg-surface-dark">Featured</option>
                                <option value="price-low" className="bg-surface-dark">Price: Low to High</option>
                                <option value="price-high" className="bg-surface-dark">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center border border-white/10 border-dashed rounded">
                        <p className="text-white/40 font-bold uppercase tracking-widest">No products found for this category.</p>
                        <button onClick={() => setSearchParams({})} className="mt-4 text-primary font-bold uppercase tracking-widest hover:underline">Clear Filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { products, Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const [imageView, setImageView] = useState<'studio' | 'lifestyle'>('studio');
    const [imageError, setImageError] = useState(false);

    const currentImage = imageView === 'lifestyle' && product.imageLifestyle
        ? product.imageLifestyle
        : product.image;

    return (
        <div className="product-card group">
            <div className="product-image-container">
                {imageError ? (
                    <div className="product-placeholder">
                        <div className="placeholder-icon">📦</div>
                        <p className="placeholder-text">{product.name}</p>
                    </div>
                ) : (
                    <img
                        src={currentImage}
                        alt={product.name}
                        className="product-image"
                        onError={() => setImageError(true)}
                    />
                )}

                {product.imageLifestyle && !imageError && (
                    <div className="image-toggle">
                        <button
                            onClick={() => setImageView('studio')}
                            className={imageView === 'studio' ? 'active' : ''}
                        >
                            Studio
                        </button>
                        <button
                            onClick={() => setImageView('lifestyle')}
                            className={imageView === 'lifestyle' ? 'active' : ''}
                        >
                            Lifestyle
                        </button>
                    </div>
                )}

                {product.featured && (
                    <span className="product-badge">Featured</span>
                )}
            </div>

            <div className="product-info">
                <div className="product-category">{product.subcategory}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                    <div className="product-price">€{product.price.toFixed(2)}</div>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart?.(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface ProductGalleryProps {
    onAddToCart?: (product: Product) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ onAddToCart }) => {
    const [filter, setFilter] = useState<'all' | 'supplement' | 'gear'>('all');
    const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

    const filteredProducts = products.filter(p =>
        filter === 'all' || p.category === filter
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'featured':
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    return (
        <div className="product-gallery">
            <div className="gallery-header">
                <h1 className="gallery-title">
                    STRYDA <span className="accent">Products</span>
                </h1>
                <p className="gallery-subtitle">Elite Performance. Premium Quality.</p>
            </div>

            <div className="gallery-controls">
                <div className="filter-buttons">
                    <button
                        onClick={() => setFilter('all')}
                        className={filter === 'all' ? 'active' : ''}
                    >
                        All Products
                    </button>
                    <button
                        onClick={() => setFilter('supplement')}
                        className={filter === 'supplement' ? 'active' : ''}
                    >
                        Supplements
                    </button>
                    <button
                        onClick={() => setFilter('gear')}
                        className={filter === 'gear' ? 'active' : ''}
                    >
                        Gear
                    </button>
                </div>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="sort-select"
                >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name</option>
                </select>
            </div>

            <div className="products-grid">
                {sortedProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            {sortedProducts.length === 0 && (
                <div className="no-products">
                    <p>No products found</p>
                </div>
            )}
        </div>
    );
};

export default ProductGallery;

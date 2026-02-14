export interface Product {
    id: string;
    name: string;
    category: 'supplements' | 'gear' | 'men' | 'women';
    subcategory?: string;
    price: number;
    description: string;
    image: string;
    imageLifestyle?: string;
    inStock: boolean;
    featured?: boolean;
}

export const products: Product[] = [
    // Supplements
    {
        id: 'creatine-mono',
        name: 'Creatine Monohydrate',
        category: 'supplements',
        subcategory: 'Performance',
        price: 39.99,
        description: 'Premium creatine monohydrate for explosive strength and muscle growth',
        image: '/images/products/supplements/creatine-mono.jpg',
        imageLifestyle: '/images/products/supplements/creatine-mono.jpg',
        inStock: true,
        featured: true
    },
    {
        id: 'whey-protein',
        name: 'Whey Protein Premium',
        category: 'supplements',
        subcategory: 'Protein',
        price: 59.99,
        description: 'Ultra-pure whey protein isolate for maximum muscle recovery',
        image: '/images/products/supplements/whey-protein.jpg',
        imageLifestyle: '/images/products/supplements/whey-protein.jpg',
        inStock: true,
        featured: true
    },
    {
        id: 'bcaa',
        name: 'BCAA Elite',
        category: 'supplements',
        subcategory: 'Recovery',
        price: 44.99,
        description: 'Essential amino acids for enhanced recovery and endurance',
        image: '/images/products/supplements/bcaa.jpg',
        imageLifestyle: '/images/products/supplements/bcaa.jpg',
        inStock: true
    },
    {
        id: 'pre-workout',
        name: 'Pre-Workout Ignite',
        category: 'supplements',
        subcategory: 'Energy',
        price: 49.99,
        description: 'Explosive energy and focus for peak performance',
        image: '/images/products/supplements/pre-workout.jpg',
        imageLifestyle: '/images/products/supplements/pre-workout.jpg',
        inStock: true,
        featured: true
    },
    // New Supplements
    {
        id: 'multivitamin',
        name: 'Daily Multivitamin',
        category: 'supplements',
        subcategory: 'Health',
        price: 29.99,
        description: 'Comprehensive daily vitamin complex for overall health optimization.',
        image: '/images/products/supplements/multivitamin.jpg',
        imageLifestyle: '/images/products/supplements/multivitamin.jpg',
        inStock: true
    },
    {
        id: 'fish-oil',
        name: 'Omega-3 Fish Oil',
        category: 'supplements',
        subcategory: 'Health',
        price: 24.99,
        description: 'High-potency Omega-3s for heart, brain, and joint health.',
        image: '/images/products/supplements/fish-oil.jpg',
        imageLifestyle: '/images/products/supplements/fish-oil.jpg',
        inStock: true
    },
    {
        id: 'zma-night',
        name: 'Nighttime ZMA',
        category: 'supplements',
        subcategory: 'Recovery',
        price: 34.99,
        description: 'Zinc and Magnesium support for deep sleep and recovery.',
        image: '/images/products/supplements/zma.jpg',
        imageLifestyle: '/images/products/supplements/zma.jpg',
        inStock: true
    },
    {
        id: 'glutamine',
        name: 'L-Glutamine Powder',
        category: 'supplements',
        subcategory: 'Recovery',
        price: 32.99,
        description: 'Pure L-Glutamine to support gut health and minimize muscle breakdown.',
        image: '/images/products/supplements/glutamine.jpg',
        imageLifestyle: '/images/products/supplements/glutamine.jpg',
        inStock: true
    },
    {
        id: 'fat-burner',
        name: 'Thermogenic Burner',
        category: 'supplements',
        subcategory: 'Weight Management',
        price: 45.99,
        description: 'Advanced formula to boost metabolism and burn fat efficiently.',
        image: '/images/products/supplements/fat-burner.jpg',
        imageLifestyle: '/images/products/supplements/fat-burner.jpg',
        inStock: true
    },


    // Gear
    {
        id: 'shaker-bottle',
        name: 'Premium Shaker',
        category: 'gear',
        subcategory: 'Accessories',
        price: 24.99,
        description: 'Leak-proof premium shaker with mixing ball',
        image: '/images/products/gear/shaker-bottle.jpg',
        imageLifestyle: '/images/products/gear/shaker-bottle.jpg',
        inStock: true
    },
    {
        id: 'smart-bottle',
        name: 'Smart Water Bottle',
        category: 'gear',
        subcategory: 'Hydration',
        price: 79.99,
        description: 'Smart hydration tracking with LED indicators',
        image: '/images/products/gear/smart-bottle.jpg',
        imageLifestyle: '/images/products/gear/smart-bottle.jpg',
        inStock: true,
        featured: true
    },
    {
        id: 'resistance-bands',
        name: 'Resistance Bands Set',
        category: 'gear',
        subcategory: 'Training',
        price: 39.99,
        description: 'Premium resistance bands for versatile training',
        image: '/images/products/gear/resistance-bands.jpg',
        imageLifestyle: '/images/products/gear/resistance-bands.jpg',
        inStock: true
    },
    {
        id: 'gym-bag',
        name: 'Luxury Duffle Bag',
        category: 'gear',
        subcategory: 'Bags',
        price: 129.99,
        description: 'Premium gym bag with multiple compartments',
        image: '/images/products/gear/gym-bag.jpg',
        imageLifestyle: '/images/products/gear/gym-bag.jpg',
        inStock: true
    },
    {
        id: 'lifting-belt',
        name: 'Premium Lifting Belt',
        category: 'gear',
        subcategory: 'Support',
        price: 89.99,
        description: 'Professional-grade lifting belt for maximum support',
        image: '/images/products/gear/lifting-belt.jpg',
        imageLifestyle: '/images/products/gear/lifting-belt.jpg',
        inStock: true
    },
    {
        id: 'gym-gloves',
        name: 'Modern Gym Gloves',
        category: 'gear',
        subcategory: 'Accessories',
        price: 34.99,
        description: 'Breathable gloves with superior grip',
        image: '/images/products/gear/gym-gloves.jpg',
        imageLifestyle: '/images/products/gear/gym-gloves.jpg',
        inStock: true
    },

    // Men
    {
        id: 'men-tech-tee',
        name: 'Core Tech T-Shirt',
        category: 'men',
        subcategory: 'Tops',
        price: 34.99,
        description: 'Moisture-wicking fabric designed for intense workouts.',
        image: '/images/products/men/tech-tee.jpg',
        imageLifestyle: '/images/products/men/tech-tee.jpg',
        inStock: true,
        featured: true
    },
    {
        id: 'men-hoodie',
        name: 'Athletic Hoodie',
        category: 'men',
        subcategory: 'Outerwear',
        price: 64.99,
        description: 'Lightweight warmth with a tailored fit for training or rest.',
        image: '/images/products/men/hoodie.jpg',
        imageLifestyle: '/images/products/men/hoodie.jpg',
        inStock: true
    },
    {
        id: 'men-shorts',
        name: 'Training Shorts 7"',
        category: 'men',
        subcategory: 'Bottoms',
        price: 44.99,
        description: 'Versatile shorts with zip pockets and breathable mesh.',
        image: '/images/products/men/shorts.jpg',
        imageLifestyle: '/images/products/men/shorts.jpg',
        inStock: true
    },
    {
        id: 'men-joggers',
        name: 'Performance Joggers',
        category: 'men',
        subcategory: 'Bottoms',
        price: 74.99,
        description: 'Tapered fit joggers engineered for movement and comfort.',
        image: '/images/products/men/joggers.jpg',
        imageLifestyle: '/images/products/men/joggers.jpg',
        inStock: true
    },
    {
        id: 'men-tank',
        name: 'Compression Tank',
        category: 'men',
        subcategory: 'Tops',
        price: 29.99,
        description: 'Second-skin fit to support muscle activity during lifting.',
        image: '/images/products/men/tank.jpg',
        imageLifestyle: '/images/products/men/tank.jpg',
        inStock: true
    },

    // Women
    {
        id: 'women-leggings',
        name: 'Sculpt Seamless Leggings',
        category: 'women',
        subcategory: 'Bottoms',
        price: 69.99,
        description: 'High-waisted, seamless design for ultimate comfort and contour.',
        image: '/images/products/women/leggings.jpg',
        imageLifestyle: '/images/products/women/leggings.jpg',
        inStock: true,
        featured: true
    },
    {
        id: 'women-bra',
        name: 'High-Impact Sports Bra',
        category: 'women',
        subcategory: 'Tops',
        price: 49.99,
        description: 'Maximum support with breathable, quick-dry technology.',
        image: '/images/products/women/sports-bra.jpg',
        imageLifestyle: '/images/products/women/sports-bra.jpg',
        inStock: true
    },
    {
        id: 'women-crop-hoodie',
        name: 'Cropped Hoodie',
        category: 'women',
        subcategory: 'Outerwear',
        price: 54.99,
        description: 'Trendy cropped silhouette perfect for layering.',
        image: '/images/products/women/crop-hoodie.jpg',
        imageLifestyle: '/images/products/women/crop-hoodie.jpg',
        inStock: true
    },
    {
        id: 'women-jacket',
        name: 'Run Windbreaker',
        category: 'women',
        subcategory: 'Outerwear',
        price: 89.99,
        description: 'Lightweight, water-resistant jacket for outdoor training.',
        image: '/images/products/women/jacket.jpg',
        imageLifestyle: '/images/products/women/jacket.jpg',
        inStock: true
    },
    {
        id: 'women-tank',
        name: 'Flow Yoga Tank',
        category: 'women',
        subcategory: 'Tops',
        price: 34.99,
        description: 'Soft, relaxed fit tank ensuring freedom of movement.',
        image: '/images/products/women/tank.jpg',
        imageLifestyle: '/images/products/women/tank.jpg',
        inStock: true
    }
];

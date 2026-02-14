export interface Product {
    id: string;
    name: string;
    category: 'Food' | 'Toys' | 'Care' | 'Accessories';
    price: number;
    description: string;
    image: string;
    badge?: 'NEW' | 'BESTSELLER';
    rating: number;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Premium Adult Dog Food',
        category: 'Food',
        price: 49.99,
        description: 'Grain-free formula with real chicken, sweet potatoes, and essential vitamins for optimal health.',
        image: '/images/products/dog-food.jpg',
        badge: 'BESTSELLER',
        rating: 4.9
    },
    {
        id: '2',
        name: 'Luxury Cat Food',
        category: 'Food',
        price: 39.99,
        description: 'Premium salmon and tuna blend with omega-3 for a shiny coat and healthy digestion.',
        image: '/images/products/cat-food.jpg',
        badge: 'NEW',
        rating: 4.8
    },
    {
        id: '3',
        name: 'Interactive Puzzle Toy',
        category: 'Toys',
        price: 24.99,
        description: 'Mentally stimulating puzzle toy that dispenses treats. Keeps your pet engaged for hours.',
        image: '/images/products/dog-toy.jpg',
        rating: 4.7
    },
    {
        id: '4',
        name: 'Plush Squeaky Toy Set',
        category: 'Toys',
        price: 19.99,
        description: 'Set of 3 durable plush toys with squeakers. Perfect for fetch and cuddle time.',
        image: '/images/products/plush-toys.jpg',
        rating: 4.6
    },
    {
        id: '5',
        name: 'Grooming Kit Pro',
        category: 'Care',
        price: 59.99,
        description: 'Complete grooming set with brush, nail clippers, and shampoo for professional results at home.',
        image: '/images/products/grooming-kit.jpg',
        badge: 'NEW', // Assuming 'Premium' maps to 'NEW' or 'BESTSELLER'
        rating: 4.9
    },
    {
        id: '6',
        name: 'Dental Care Chews',
        category: 'Care',
        price: 29.99,
        description: 'Veterinarian-recommended dental chews that reduce plaque and freshen breath naturally.',
        image: '/images/products/dental-chews.jpg',
        rating: 4.7
    },
    {
        id: '7',
        name: 'Designer Leather Collar',
        category: 'Accessories',
        price: 34.99,
        description: 'Handcrafted genuine leather collar with rose gold hardware. Adjustable and durable.',
        image: '/images/products/dog-collar.jpg',
        badge: 'NEW', // Assuming 'Luxury' maps to 'NEW' or 'BESTSELLER'
        rating: 4.8
    },
    {
        id: '8',
        name: 'Orthopedic Pet Bed',
        category: 'Accessories',
        price: 79.99,
        description: 'Memory foam bed with washable cover. Provides superior comfort and joint support.',
        image: '/images/products/pet-bed.jpg',
        badge: 'BESTSELLER',
        rating: 4.9
    },
    {
        id: '9',
        name: 'Durable Tug Rope',
        category: 'Toys',
        price: 15.99,
        description: 'Heavy-duty cotton rope toy for interactive tug-of-war games. Promotes dental health.',
        image: '/images/products/dog-tug-rope.jpg',
        rating: 4.8
    },
    {
        id: '10',
        name: 'Flying Disc Frisbee',
        category: 'Toys',
        price: 12.99,
        description: 'Aerodynamic and lightweight frisbee for hours of fetch in the park. Easy to clean.',
        image: '/images/products/dog-frisbee.jpg',
        badge: 'NEW',
        rating: 4.7
    },
    {
        id: '11',
        name: 'Smart Laser Teaser',
        category: 'Toys',
        price: 18.99,
        description: 'Automatic laser toy with random patterns to keep your cat active and entertained.',
        image: '/images/products/cat-laser-toy.jpg',
        rating: 4.6
    },
    {
        id: '12',
        name: 'Vibrant Pattern Collar',
        category: 'Accessories',
        price: 24.99,
        description: 'Stylish and durable collar with unique colorful patterns. Adjustable fit for all breeds.',
        image: '/images/products/dog-collar-colorful.jpg',
        badge: 'NEW',
        rating: 4.8
    },
    {
        id: '13',
        name: 'Reflective Nylon Collar',
        category: 'Accessories',
        price: 19.99,
        description: 'High-visibility reflective stitching for safety during night walks. Quick-release buckle.',
        image: '/images/products/dog-collar-nylon.jpg',
        rating: 4.7
    }
];

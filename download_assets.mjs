import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadParams = [
    // Techtonic Pet Store
    {
        url: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/dog-food.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/cat-food.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/dog-toy.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/plush-toys.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/grooming-kit.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/dental-chews.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80', // Corgi (Working fallback for collar)
        dest: 'techtonic-pet-store/public/images/products/dog-collar.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=800&q=80', // Dog Toy image (Working fallback for bed)
        dest: 'techtonic-pet-store/public/images/products/pet-bed.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/pet-bowl.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/pet-leash.jpg',
    },
    // New Toys
    {
        // Tug Rope - dog playing with rope
        url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/dog-tug-rope.jpg',
    },
    {
        // Frisbee - dog with frisbee
        url: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/dog-frisbee.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80',
        dest: 'techtonic-pet-store/public/images/products/cat-laser-toy.jpg',
    },
    // New Collars
    {
        url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80', // Dog with collar
        dest: 'techtonic-pet-store/public/images/products/dog-collar-colorful.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80', // Leash image for nylon collar (safe fallback)
        dest: 'techtonic-pet-store/public/images/products/dog-collar-nylon.jpg',
    },

    // StrydaApp
    // Protein Powder -> Whey Protein
    {
        url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/whey-protein.jpg',
    },
    // Creatine
    {
        url: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/creatine-mono.jpg',
    },
    // BCAA
    {
        url: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/bcaa.jpg',
    },
    // Pre-Workout
    {
        url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/pre-workout.jpg',
    },
    // Shaker Bottle
    {
        url: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/shaker-bottle.jpg',
    },
    // Gym Bag
    {
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/gym-bag.jpg',
    },
    // Resistance Bands
    {
        url: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/resistance-bands.jpg',
    },
    // Lifting Belt
    {
        url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/lifting-belt.jpg',
    },
    // Gym Gloves (Unique)
    {
        url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/gym-gloves.jpg',
    },
    // Water Bottle -> Smart Bottle
    {
        url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
        dest: 'StrydaApp/public/images/products/gear/smart-bottle.jpg',
    },
    // New Supplements (StrydaApp)
    {
        url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80', // Reliable Medical/Vitamin Bottle
        dest: 'StrydaApp/public/images/products/supplements/multivitamin.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/fish-oil.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/zma.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&q=80',
        dest: 'StrydaApp/public/images/products/supplements/glutamine.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80', // Yellow capsules/pills (Verified working)
        dest: 'StrydaApp/public/images/products/supplements/fat-burner.jpg',
    },
    // Men's Apparel (StrydaApp)
    {
        url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80',
        dest: 'StrydaApp/public/images/products/men/tech-tee.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
        dest: 'StrydaApp/public/images/products/men/hoodie.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
        dest: 'StrydaApp/public/images/products/men/shorts.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80',
        dest: 'StrydaApp/public/images/products/men/joggers.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1503341338985-c0477be52513?w=800&q=80', // Man in tank alternative
        dest: 'StrydaApp/public/images/products/men/tank.jpg',
    },
    // Women's Apparel (StrydaApp)
    {
        url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=800&q=80', // Yoga/Leggings alternative
        dest: 'StrydaApp/public/images/products/women/leggings.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', // Fitness woman alternative
        dest: 'StrydaApp/public/images/products/women/sports-bra.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
        dest: 'StrydaApp/public/images/products/women/crop-hoodie.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
        dest: 'StrydaApp/public/images/products/women/jacket.jpg',
    },
    {
        url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80',
        dest: 'StrydaApp/public/images/products/women/tank.jpg',
    },
];

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        const fullPath = path.join(__dirname, dest);
        const dir = path.dirname(fullPath);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }

        const file = fs.createWriteStream(fullPath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${dest}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(fullPath, () => { });
            reject(err);
        });
    });
};

const run = async () => {
    console.log('Starting downloads...');
    for (const item of downloadParams) {
        try {
            await downloadImage(item.url, item.dest);
        } catch (error) {
            console.error(`Error downloading ${item.dest}:`, error.message);
        }
    }
    console.log('All downloads complete!');
};

run();

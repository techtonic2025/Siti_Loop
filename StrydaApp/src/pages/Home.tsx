import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
    // const { cart } = useCart();
    const featuredProducts = products.filter(p => !['5', '6', '7', '8'].includes(p.id)); // Just showing first 4 as featured for now
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        // Auto-play audio when component mounts (muted by default)
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Set volume to 30%
            audioRef.current.play().catch(err => {
                console.log('Audio autoplay prevented:', err);
            });
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/20 z-10" /> {/* Reduced overlay for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-100 brightness-110 contrast-110"
                        poster="https://lh3.googleusercontent.com/aida-public/AB6AXuC-KpQ35mv4KBdi_UvWIEqG0Ris-KiuBumgI14ZzXvgneURbrc1jUKpCQ_QmaaSAalKgl6evzOXsZSlgBnQXBgRE6p_91ndsVL8hZjMIDqKDH_8U95WiZLmKWzwjO-LQiMFRQ2edKtWKdzzzMdjF7l5z9xnpv0A98YDLpjf24MsloC1eXCvrvlIK54W_WoyEnmdt7I1NOmaNyYtktoTrmGX37TXJmopX53WYhzer7Z761WqB883D-co_QNRecporQjfwnkLbyzKMgl8"
                    >
                        <source src="/Video/Video_Hero_Fitness.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-6 text-center">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Engineered for Elite Performance</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-6 leading-[0.9] text-white mix-blend-overlay">
                            Stryda<span className="text-primary">App</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
                            Push beyond limits with gear designed for the obsessed.
                            <br className="hidden md:block" />
                            Precision-engineered supplements and apparel for those who refuse to settle.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link to="/products" className="group relative px-10 py-5 bg-primary text-black font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:scale-105">
                                <span className="relative z-10">Shop Collection</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </Link>
                            <Link to="/products?category=supplements" className="group px-10 py-5 border border-white/30 hover:border-white text-white font-bold text-lg uppercase tracking-widest backdrop-blur-sm transition-all hover:bg-white/10">
                                View Catalog
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <ChevronDown className="text-white/50" size={32} />
                </div>

                {/* Audio Control Button */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-10 right-10 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 group"
                    aria-label={isMuted ? "Unmute background music" : "Mute background music"}
                >
                    {isMuted ? (
                        <VolumeX className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    ) : (
                        <Volume2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    )}
                </button>

                {/* Background Audio */}
                <audio
                    ref={audioRef}
                    loop
                    muted={isMuted}
                    preload="auto"
                >
                    <source src="/audio/background-music.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </section>

            {/* Category Section */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative group h-96 overflow-hidden rounded bg-surface-dark">
                        <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAieHA2shbOoWHga07ArrGOkxlMZw0EfFnDZOPObzGSuT-5zNy1S7Ru-2avDvfgnnsArs9FVziP63a_y0BF2RB6ysaq49JKFhrHnG5IWAn_3kv7TM6y2tSWAkF3yLwtI5Qkg7dfmYsymJzQpCiYK2R5YQdDQUo7lrxUeg60um9CIuC2cBwYEkQDhSA7blYrxXZqcHCnskshDiqDVdBtBdJSwh6_9Ay4MReCD6Fpy2HhRCVc0re0CsfTVL5DN1pHotjlL0UJaqI2ksO6" alt="Supplements" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Supplements</h3>
                            <Link to="/products?category=supplements" className="text-primary text-sm font-bold uppercase tracking-widest group-hover:underline">Explore More →</Link>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none"></div>
                    </div>
                    <div className="relative group h-96 overflow-hidden rounded bg-surface-dark">
                        <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVlowTXMpIefRwrNlQwywmkNRJkBZq50qvT0NL_H8SCKsP8_1K0mx5kQ5qtV38EHwJ2PTqqgCM0LUHYxQYHhVfSPydufq9hIJSNPnJjAhvun-K6wyBj0pfq8pb9_QERBdQYTRSLlZeAHZPcjfa8wXuOKbHoOsmS2UcfzZmHSXk75TEC0m612mkQ7g1XM9-pASz6-3fNalcLfrsMEeQJCV0F8dXxnas57ue8QxObH_o8x6R5gOHH0rLdDmfmc_-_LHJdlzVw_7CJOyo" alt="Apparel" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Apparel</h3>
                            <Link to="/products?category=apparel" className="text-primary text-sm font-bold uppercase tracking-widest group-hover:underline">Explore More →</Link>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none"></div>
                    </div>
                    {/* Equipment */}
                    <div className="relative group h-96 overflow-hidden rounded bg-surface-dark">
                        <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4pUDbJPG3C2oZGWzIAIZSD-aOANoBEp3ql67llB2GaAOUeqUPwf4BgKesHt3Nd5mxletWM0JzcKJwwCnJ3OJvJmbeOWueB2qOWY-C0jwvxxQcX079YX3rF8xBMogvpJZnm0OYXkjIBNhwv9vEew5znzwCuIIfpJsLntucOvUNg2RdRcP4Ghhnf-E47r2AnAxLgNxDjAlOmOIWfVjoaNmqP8e1G4tPBjZloOJrCH4dt0vTrfZGjQUr-zKcVZiBKd2ZXBUkCZwBiyNE" alt="Equipment" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Equipment</h3>
                            <Link to="/products?category=gear" className="text-primary text-sm font-bold uppercase tracking-widest group-hover:underline">Explore More →</Link>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none"></div>
                    </div>
                    {/* Accessories */}
                    <div className="relative group h-96 overflow-hidden rounded bg-surface-dark">
                        <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24ypDd1vgwYbi8LaUTm_cZxu8K2d1A4V0XnAs3slXX0YrqMv_uY8bteAHbn3vkBXutrLuT2zr8c4diCbeKsHZXfd2Fyj5ZEYwMwy04kbhjIopaifDXPLtWBwTARNoVHUoovCceXAkaYyjN-UMzz3Wz42JbHHh3XQ0gr0FALCu6mTe0jpHLO23GM90ZIBU7DkXEaSVVAUd5gHWtAb6sCVSJDZLZ5qSaNbutbjr1vmLRYkrU4OS3Krlo5dO7jU3pOIswpHDEqe2Rg5Q" alt="Accessories" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Accessories</h3>
                            <Link to="/products?category=gear" className="text-primary text-sm font-bold uppercase tracking-widest group-hover:underline">Explore More →</Link>
                        </div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-bold uppercase tracking-tighter">Featured Gear</h2>
                            <div className="h-1 w-20 bg-primary mt-4"></div>
                        </div>
                        <Link to="/products" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">View All Products</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

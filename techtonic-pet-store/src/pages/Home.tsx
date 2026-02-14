import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Heart, Play, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Home: React.FC = () => {
    const featuredProducts = products.filter(p => ['1', '2', '5', '8'].includes(p.id));

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[95vh] min-h-[600px] w-full overflow-hidden flex items-center bg-gray-900">
                {/* Video Background */}
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        // Fallback image if video fails to load or on data-saver mode
                        poster="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2686&auto=format&fit=crop"
                    >
                        <source src="/Video/Video_Hero_Pet.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 relative z-20 pt-20">
                    <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-1000 fill-mode-forwards">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            #1 Rated Pet Store in 2024
                        </div>

                        {/* Heading */}
                        <h1 className="font-display font-black text-6xl md:text-8xl text-white leading-[0.95] tracking-tight drop-shadow-lg">
                            Happiness <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                unleashed.
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-200 max-w-lg leading-relaxed font-light drop-shadow-md">
                            Premium food, durable toys, and cozy accessories. Everything your pet needs to live their best life, delivered to your door.
                        </p>

                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link to="/products" className="w-full sm:w-auto group relative px-8 py-5 bg-primary rounded-full font-bold text-text-dark text-lg shadow-[0_0_20px_rgba(252,211,77,0.4)] hover:shadow-[0_0_40px_rgba(252,211,77,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
                                <span className="relative z-10">Start Shopping</span>
                                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-bold text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                    <Play size={14} className="ml-1 fill-current" />
                                </div>
                                <span>Watch Story</span>
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80" alt="Happy Customer" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" alt="Happy Customer" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80" alt="Happy Customer" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <p className="text-gray-300 font-medium"><strong className="text-white">4.9/5</strong> from 2k+ happy owners</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Truck className="w-6 h-6 text-yellow-600" />,
                                title: "Free Shipping",
                                desc: "On all orders over $50",
                                bg: "bg-yellow-50",
                                border: "group-hover:border-yellow-200"
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                                title: "Quality Guarantee",
                                desc: "Hypoallergenic & Safe",
                                bg: "bg-emerald-50",
                                border: "group-hover:border-emerald-200"
                            },
                            {
                                icon: <Heart className="w-6 h-6 text-rose-600" />,
                                title: "Charity Support",
                                desc: "1% donated to shelters",
                                bg: "bg-rose-50",
                                border: "group-hover:border-rose-200"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className={`group p-8 rounded-3xl bg-white border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 ${feature.border}`}>
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-[#FCFCFD]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Favorites</span>
                        <h2 className="text-4xl font-display font-extrabold mt-3 mb-6 relative inline-block">
                            Trending Now
                            <span className="absolute bottom-1 right-0 w-2 h-2 bg-primary rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/products" className="inline-flex items-center gap-2 font-bold text-lg text-text-dark hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1">
                            View All Products <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

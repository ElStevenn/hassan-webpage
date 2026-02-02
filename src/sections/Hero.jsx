import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from '../components/ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-secondary-light animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Trusted by 17.7k+ Students on Instagram
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                        Speak English with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Confidence</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Join thousands of learners. Book personalized 1-on-1 online lessons to master fluency and real-world conversation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-secondary/20 font-bold" onClick={() => document.getElementById('trial').scrollIntoView({ behavior: 'smooth' })}>
                            Book a Free Trial Class
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 gap-2">
                            <Play size={18} fill="currentColor" />
                            Watch Introduction
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 justify-center md:justify-start pt-4 opacity-90">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-gray-300"></div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-300">
                            <span className="font-bold text-white">17,700+</span> students on Instagram
                        </p>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto md:ml-auto max-w-[400px] md:max-w-full"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/images/hero.png"
                            alt="Hassan - English Teacher"
                            className="w-full h-auto object-cover bg-surface"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
                    <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary-light rounded-full blur-2xl opacity-40"></div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white text-gray-900 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 max-w-[200px]"
                    >
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm">Proven Results</p>
                            <p className="text-xs text-gray-500">Students improved in 30 days</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

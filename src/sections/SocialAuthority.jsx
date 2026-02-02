import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Instagram, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialAuthority = () => {
    return (
        <Section id="social" background="white" className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div className="space-y-6 text-center md:text-left">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase">
                        <Instagram size={14} />
                        Social Proof
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Learn English with a Teacher Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Thousands</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-gray-900">17.7k+</span>
                            <span className="text-sm text-gray-500 leading-tight text-left">
                                Followers on<br />Instagram
                            </span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                        <p className="text-lg text-gray-600 max-w-sm">
                            I create short, practical English videos to help students improve their speaking and confidence every day.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button
                            variant="primary"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-pink-500/20"
                            onClick={() => window.open('https://www.instagram.com/alikhanoliver/', '_blank')}
                        >
                            <Instagram size={18} className="mr-2" />
                            Follow me on Instagram
                        </Button>
                        <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                            <Video size={18} className="mr-2 text-gray-400" />
                            Watch My Videos
                        </Button>
                    </div>
                </div>

                {/* Visual Side - Simulated Phone/Content */}
                <div className="relative mx-auto w-full max-w-md">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>

                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4 pt-8"
                        >
                            <div className="bg-white p-2 rounded-2xl shadow-card border border-gray-100 rotate-[-2deg]">
                                <div className="bg-gray-100 rounded-xl aspect-[9/16] relative overflow-hidden group">
                                    <video
                                        src="/videos/random-video-of-hassan-speaking-english.mp4"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
                                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-xs font-medium">
                                        <p>Common Mistakes 🇺🇸</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                        <Instagram size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">@alikhanoliver</p>
                                        <p className="text-xs text-gray-500">English Coach</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 mb-4">
                                <div className="flex gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 text-yellow-400">★</div>)}
                                </div>
                                <p className="text-xs text-gray-600 font-medium">"I found you on Instagram and your reels helped me so much!"</p>
                            </div>

                            <div className="bg-white p-2 rounded-2xl shadow-card border border-gray-100 rotate-[3deg]">
                                <div className="bg-gray-100 rounded-xl aspect-[9/16] relative overflow-hidden group">
                                    <video
                                        src="/videos/video-english-teaching1.mp4"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
                                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-xs font-medium">
                                        <p>Speak Confidently 🗣️</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SocialAuthority;

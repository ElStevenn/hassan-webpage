import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Approach', href: '#approach' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold font-heading ${scrolled || isOpen ? 'text-primary' : 'text-white'
                    } transition-colors`}>
                    Hassan<span className="text-secondary">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium hover:text-secondary transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant={scrolled ? 'primary' : 'white'} className="px-5 py-2 text-sm">
                        Book Free Trial
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="text-gray-800" /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-lg overflow-hidden border-t"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                                Book Free Trial
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

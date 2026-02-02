import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-bold font-heading text-white">
                            Hassan<span className="text-secondary">.</span>
                        </a>
                        <p className="mt-2 text-sm text-slate-400">
                            Professional English Teacher • 5+ Years Experience
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Hassan English Teacher. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

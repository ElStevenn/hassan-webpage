import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" background="white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
                        <img
                            src="/images/about-me.png"
                            alt="Hassan About Me"
                            className="relative rounded-2xl shadow-lg w-full h-auto object-cover bg-gray-100"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 order-1 md:order-2"
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Hi, I'm Hassan, your <span className="text-primary">English Coach</span>
                    </h2>
                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                            I am a 26-year-old Native English teacher with a passion for helping students unlock their potential.
                        </p>
                        <p>
                            Over the last 5 years, I've had the privilege of teaching students from all over the world. My goal isn't just to teach you grammar rules, but to help you <strong>speak with confidence</strong> in real-life situations.
                        </p>
                        <p>
                            Whether you need English for your career, travel, or personal growth, I design my lessons to be engaging, practical, and tailored specifically to your needs.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;

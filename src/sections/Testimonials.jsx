import React from 'react';
import Section from '../components/ui/Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Maria G.",
        country: "Spain",
        quote: "I was afraid to speak English before, but Hassan made me feel so comfortable. Now I can speak with my colleagues confidently.",
        role: "Marketing Manager"
    },
    {
        name: "Yuki T.",
        country: "Japan",
        quote: "His explanations are very clear. He helped me correct my pronunciation errors that no other teacher noticed.",
        role: "University Student"
    },
    {
        name: "Ahmed S.",
        country: "Saudi Arabia",
        quote: "Best teacher I have found online. The lessons are fun and I learn something new every time. Highly recommended!",
        role: "Software Engineer"
    }
];

const Testimonials = () => {
    return (
        <Section id="testimonials" background="white">
            <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">Success Stories</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Real Feedback from Real Students</h2>
                <p className="text-gray-500 mt-4">Many of my students found me on Instagram first!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-surface p-8 rounded-2xl relative"
                    >
                        <Quote className="text-secondary/20 absolute top-6 right-6 w-12 h-12" />

                        <div className="space-y-4">
                            <div className="flex gap-1" >
                                {[1, 2, 3, 4, 5].map(star => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>

                            <p className="text-gray-700 italic leading-relaxed">"{t.quote}"</p>

                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-bold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role} • {t.country}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;

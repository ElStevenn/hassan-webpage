import React from 'react';
import Section from '../components/ui/Section';
import { MessageCircle, Zap, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Target,
        title: "Personalized Goals",
        desc: "Every student is unique. I tailor lessons to match your specific goals and interests."
    },
    {
        icon: MessageCircle,
        title: "Real Conversations",
        desc: "Forget boring textbooks. We focus on speaking about real-world topics that matter to you."
    },
    {
        icon: Zap,
        title: "Confidence First",
        desc: "I create a safe environment where you can make mistakes and learn without fear."
    },
    {
        icon: Heart,
        title: "Friendly Feedback",
        desc: "Get clear, constructive corrections on pronunciation and grammar instantly."
    }
];

const TeachingApproach = () => {
    return (
        <Section id="approach" background="gray">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">My Method</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How I Help You Improve</h2>
                <p className="text-gray-600 mt-4 text-lg">My teaching style is focused on active communication and practical usage.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-card hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default TeachingApproach;

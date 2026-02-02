import React from 'react';
import Section from '../components/ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const audiences = [
    "Beginners ready to start speaking",
    "Intermediate learners feeling 'stuck'",
    "Professionals needing English for work",
    "Students preparing for interviews/exams",
    "Travelers wanting to connect globally"
];

const TargetAudience = () => {
    return (
        <Section background="white" className="overflow-hidden">
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who are these lessons for?</h2>
                        <p className="text-primary-light text-lg mb-6">
                            I designed my curriculum to remain flexible enough to help a wide variety of learners.
                        </p>
                        <div className="space-y-4">
                            {audiences.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-secondary shrink-0" />
                                    <span className="font-medium text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* Visual representation or illustration could go here */}
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-bold mb-4">Your Success Path</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-white shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold">Assessment</h4>
                                        <p className="text-sm text-gray-200">We identify your level and goals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-white shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold">Practice</h4>
                                        <p className="text-sm text-gray-200">Interactive lessons and homework.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-white shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold">Fluency</h4>
                                        <p className="text-sm text-gray-200">Achieve confidence in speaking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TargetAudience;

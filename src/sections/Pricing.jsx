import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <Section id="pricing" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, Affordable Pricing</h2>
                <p className="text-gray-600 mt-4 text-lg">Invest in your future for less than the cost of a nice dinner.</p>
            </div>

            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="p-8 text-center">
                        <h3 className="text-xl font-medium text-gray-500 mb-2">1-on-1 Lesson</h3>
                        <div className="flex items-center justify-center gap-1 mb-6">
                            <span className="text-5xl font-bold text-gray-900">$17</span>
                            <span className="text-gray-500 self-end mb-2">/ hour</span>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Personalized instruction tailored mainly for you.
                        </p>
                        <Button className="w-full">
                            Book a Lesson
                        </Button>
                    </div>
                    <div className="bg-gray-50 p-8 border-t border-gray-100">
                        <ul className="space-y-4">
                            {[
                                "60-minute video call",
                                "Personalized learning materials",
                                "Flexible scheduling",
                                "Homework & feedback",
                                "No long-term contracts"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="p-1 bg-green-100 rounded-full text-green-600 mt-0.5">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;

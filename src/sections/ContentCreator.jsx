import React from 'react';
import Section from '../components/ui/Section';
import { Smartphone, Monitor, Globe } from 'lucide-react';

const ContentCreator = () => {
    return (
        <Section background="gray" className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl relative z-10 border border-gray-100">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Daily Micro-Lessons</h4>
                                    <p className="text-gray-600 text-sm">60-second tips on pronunciation and idioms posted daily.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <Monitor size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">In-Depth Workshops</h4>
                                    <p className="text-gray-600 text-sm">Longer form content breaking down complex grammar.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Global Community</h4>
                                    <p className="text-gray-600 text-sm">Join thousands of students learning together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Content Creator</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Teaching Beyond the Classroom</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I don't just teach during our 1-on-1 calls. I am passionate about making English education accessible to everyone through social media.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        My modern teaching methods are tested daily with an audience of over <strong>17,000 students</strong>. When you book a lesson with me, you are getting a coach who understands how people actually speak in 2024.
                    </p>
                </div>

            </div>
        </Section>
    );
};

export default ContentCreator;

import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const FreeTrial = () => {
    return (
        <Section id="trial" background="gray">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">

                    <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold tracking-wider w-max mb-4">LIMITED OFFER</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Trial English Class</h2>
                        <p className="text-primary-light mb-8 text-lg">
                            Experience my teaching style with zero risk. Includes a level assessment and personalized plan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                1-on-1 Session
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                No Payment Required
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                30 Minutes Duration
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 bg-white">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white">
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                </select>
                            </div>
                            <Button className="w-full mt-4" size="lg">
                                Book Free Class
                            </Button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                No credit card required. I'll email you to confirm.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default FreeTrial;

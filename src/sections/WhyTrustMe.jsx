import React from 'react';
import Section from '../components/ui/Section';
import { ShieldCheck, UserCheck, Star } from 'lucide-react';

const WhyTrustMe = () => {
    return (
        <div className="bg-primary-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">

                    <div className="px-8 text-center space-y-2">
                        <div className="flex justify-center text-secondary mb-3">
                            <ShieldCheck size={32} />
                        </div>
                        <div className="text-3xl font-bold font-heading">5+ Years</div>
                        <div className="text-white/60 text-sm">Professional Teaching Experience</div>
                    </div>

                    <div className="px-8 text-center space-y-2">
                        <div className="flex justify-center text-pink-500 mb-3">
                            <UserCheck size={32} />
                        </div>
                        <div className="text-3xl font-bold font-heading">17,700+</div>
                        <div className="text-white/60 text-sm">Followers on Instagram</div>
                    </div>

                    <div className="px-8 text-center space-y-2">
                        <div className="flex justify-center text-secondary mb-3">
                            <Star size={32} />
                        </div>
                        <div className="text-3xl font-bold font-heading">100%</div>
                        <div className="text-white/60 text-sm">Positive Student Feedback</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyTrustMe;

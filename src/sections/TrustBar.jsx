import React from 'react';
import { Award, Globe, Users, Smile } from 'lucide-react';

const TrustBar = () => {
    const items = [
        { icon: Award, label: "5+ Years Experience" },
        { icon: Globe, label: "Native Speaker" },
        { icon: Users, label: "Global Students" },
        { icon: Smile, label: "Fun & Friendly" },
    ];

    return (
        <div className="bg-white py-8 -mt-8 relative z-20 shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="p-3 bg-primary/5 rounded-full text-primary">
                                <item.icon size={24} />
                            </div>
                            <span className="font-semibold text-gray-700 text-sm md:text-base">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;

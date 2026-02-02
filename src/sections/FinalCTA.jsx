import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const FinalCTA = () => {
    return (
        <section className="py-20 bg-primary text-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                    Ready to speak English with confidence?
                </h2>
                <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                    Join students from all over the world who are already learning with me. No payment required for the trial.
                </p>
                <Button variant="secondary" className="text-lg px-10 py-4 shadow-xl shadow-secondary/20">
                    Book Your Free Trial Class
                </Button>
            </div>
        </section>
    );
};

export default FinalCTA;

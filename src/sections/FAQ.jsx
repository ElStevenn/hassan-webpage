import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Do I need to download any software?",
        answer: "No! We can use Zoom, Google Meet, or Skype—whichever is easiest for you."
    },
    {
        question: "How do I pay for the lessons?",
        answer: "You can pay securely via PayPal or bank transfer after we schedule your lessons."
    },
    {
        question: "Can I cancel a lesson if I'm busy?",
        answer: "Yes, you can reschedule or cancel up to 24 hours before the lesson without any fee."
    },
    {
        question: "Is the trial class really free?",
        answer: "Yes! 100% free. It's a chance for us to meet and see if we are a good match."
    },
    {
        question: "Do you teach children?",
        answer: "I specialize in teaching adults and young adults (16+), but feel free to message me to discuss."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <Section id="faq" background="gray">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-900">{faq.question}</span>
                            {openIndex === idx ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-gray-400" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6"
                                >
                                    <p className="text-gray-600 pb-6 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQ;

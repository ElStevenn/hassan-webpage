import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/30 focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary-light/10 focus:ring-primary",
        white: "bg-white text-primary hover:bg-gray-50 shadow-lg focus:ring-white",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

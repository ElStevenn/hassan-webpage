import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    background = 'white'
}) => {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-surface',
        primary: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    };

    return (
        <section
            id={id}
            className={`py-12 md:py-20 ${bgColors[background]} ${className}`}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {children}
            </div>
        </section>
    );
};

export default Section;

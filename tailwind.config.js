/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4F46E5', // Indigo 600
                    DEFAULT: '#4338ca', // Indigo 700
                    dark: '#312e81', // Indigo 900
                },
                secondary: {
                    light: '#FCD34D', // Amber 300
                    DEFAULT: '#F59E0B', // Amber 500
                    dark: '#B45309', // Amber 700
                },
                surface: '#F8FAFC', // Slate 50
                text: '#1E293B', // Slate 800
                muted: '#64748B', // Slate 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
            }
        },
    },
    plugins: [],
}

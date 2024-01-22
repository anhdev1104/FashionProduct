/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#f6f3e4',
                second: '#212121',
                borderColor: '#e3ddbb',
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '375px',
                'mobile-s': '320px',
                'mobile-m': '375px',
                'mobile-l': '425px',
                'tablet': '768px',
            },
        },
    },
    plugins: [],
}

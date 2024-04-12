/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                titles: ['"Bruno Ace"'],
            },
            colors: {
                whitesmoke: {
                    DEFAULT: "#f5f5f5",
                },
            },
        },
    },
    plugins: [],
};

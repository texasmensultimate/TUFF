module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'burnt-orange': '#BF5700',
                'darker-burnt-orange': '#8C3D00',
                'light-burnt-orange': '#D86A1E',
                'lighter-burnt-orange': '#FFA07A',
                'dark-bg': '#1e1e1e',
                'dark-card': '#2a2a2a',
                'light-text': '#f4f4f4',
                'secondary-text': '#a0a0a0'
            },
            fontFamily: {
                'anton': ['Anton', 'sans-serif'],
            },
            screens: {
                'ipad': '810px',
            },
        },
    },
    plugins: [],
}

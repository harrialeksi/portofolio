const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				// main: '"Didact Gothic", sans-serif',
				// titles: '"Sen", sans-serif',
				main: ['var(--font-didact-gothic)', ...fontFamily.sans],
				titles: ['var(--font-sen)', ...fontFamily.sans],
			},
			fontWeight: {},
			colors: {
				accent: 'rgb(171 64 96)',
				main: {
					dark: 'rgb(17 17 17)',
					mid: 'rgb(26 24 29)',
				},
			},
			width: {
				box: 'min(1024px, 95%)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}

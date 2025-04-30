/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
			},
		},
		extend: {
			colors: {
				'background-dark': 'rgb(15 16 22)',
				'bg-font-dark': 'rgb(33 35 51)',
				'bg-font-light': 'rgb(45 48 70)',
				'brand-blue': '#0057FF',
				'brand-green': '#B9FF66',
				'brand-dark': '#151721',
				'brand-white': '#F3F3F3',
				'color-active': 'rgb(185 255 102)',
				'color-passive': 'rgb(77 78 81)',
			},
			fontFamily: {
				sans: ['Mohave', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				'brand': '8px',
			},
		},
	},
	plugins: [],
};

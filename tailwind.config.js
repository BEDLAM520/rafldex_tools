/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./public/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
			},
		},
		extend: {
			colors: {
				'background-dark': '#0F1016',
				'bg-font-dark': '#212333',
				'bg-font-light': '#2D3046',
				'brand-blue': '#0057FF',
				'brand-green': '#B9FF66',
				'brand-dark': '#151721',
				'brand-white': '#F3F3F3',
				'color-active': '#B9FF66',
				'color-passive': '#4D4E51',
			},
			fontFamily: {
				sans: ['Mohave', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				'brand': '10px',
			},
		},
	},
	plugins: [],
};

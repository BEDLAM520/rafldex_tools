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
				'brand-orange': '#FF6B00',
				'brand-dark': '#1A1A1A',
				'brand-light-gray': '#F5F5F5',
				'brand-white': '#FFFFFF',
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				'brand': '8px',
			} ,
		},
	},
	plugins: [],
};

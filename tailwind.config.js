/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		colors: {
			transparent: 'transparent',
			tomato: '#f06449',
			issabeline: '#ede6e3',
			platinum: '#dadad9',
			blackOlive: '#36382e',
			vividSkyBlue: '#5bc3eb',
		},
		extend: {
			fontFamily: {
				federo: ['Federo'],
				anonymousPro: ['Anonymous Pro'],
				biryani: ['Biryani'],
			},
		},
	},
	plugins: [],
};

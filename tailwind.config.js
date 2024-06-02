/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/*.{js,jsx}', './src/pages/*.{js,jsx}', './src/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				main: '#FB4C1F',
				sub: '#00AE8B',
				accent: '#CC4FFF',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};


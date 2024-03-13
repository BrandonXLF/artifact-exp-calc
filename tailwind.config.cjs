/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: '#222',
				bg: '#333'
			},
			gridTemplateColumns: {
				'label-content': 'max-content 1fr'
			},
			borderColor: {
				DEFAULT: '#aaa',
				light: '#777',
				'extra-light': '#444'
			}
		}
	},

	plugins: []
};

module.exports = config;

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			borderColor: {
				DEFAULT: '#aaa',
				light: '#777',
				'extra-light': '#444'
			},
			colors: {
				main: '#222',
				secondary: '#333',
				input: '#282828'
			},
			dropShadow: {
				popover: '0 3px 6px #222'
			},
			gridTemplateColumns: {
				'label-content': 'max-content 1fr'
			}
		}
	},

	plugins: []
};

module.exports = config;

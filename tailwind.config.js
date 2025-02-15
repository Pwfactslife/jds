/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1a1a1a',  // Dark theme base
					light: '#2d2d2d'
				},
				accent: {
					gold: '#D4AF37',     // Gold accent
					blue: '#0066cc'      // Blue accent
				}
			}
		},
	},
	plugins: [],
}
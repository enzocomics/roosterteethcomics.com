/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				copy: ["var(--font-copy)"],
				display: ["var(--font-display)"],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "465px"
			},
			colors: {
				primary: {
					1: "#ffcf40",
					2: "#ffdc73"
				}
			},
			fontFamily: {
				sans: ["Departure Mono", "monospace"]
			}
		}
	},
	plugins: []
}

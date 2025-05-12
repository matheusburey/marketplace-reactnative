/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{ts,tsx}"];
export const presets = [require("nativewind/preset")];
export const theme = {
	extend: {
		colors: {
			"primary-text": "#FFFFFF",
			"secondary-text": "#C0C0C1",
			background: "#171717",
			"background-light": "#222323",
			"border-color": "#848484",
			"primary-button": "#5F96ED",
			"secondary-button": "#4C4C4C",
			"denounce-button": "#F64348",
		},
	},
};
export const plugins = [];

import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: {
					500: "#305EFF",
				},
				dark: {
					600: "#2A3057",
					700: "#202548",
					800: "#161A37",
					900: "#140F12",
				},
				light: {
					900: "#FFFFFF",
					800: "#FAFAFA",
					700: "#F5F6FA",
					600: "#B9B7B8",
				},
				accent: {
					100: "#FFF4E6",
					500: "#FC9000",
				},
			},
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
			backgroundImage: {
				auth: "url('/assets/images/loginImage@3x.png')",
			},
			screens: {
				xs: "420px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;

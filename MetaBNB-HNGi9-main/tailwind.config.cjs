/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				meta: "#A02279",
				modal: "rgba(64, 64, 64, 0.3)",
			},
			backgroundImage: {
				buttonColor: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
				settings: "url('/images/location-setting.svg')",
			},
		},
	},
	plugins: [],
};

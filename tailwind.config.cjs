const {createMaterialTheme} = require("@udixio/tailwind-material");
/** @type {import('tailwindcss').Config} */
const materialTailwind = createMaterialTheme(
	{
		primary: '#6750A4',
		secondary: '#958DA5',
		tertiary: '#B58392',
	},
	'class'
);


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@udixio/ui/**/*.js',
	],
	theme: {
		colors: {
			...materialTailwind.colors, // Register Material colors
		},
		fontFamily: {
			...materialTailwind.fontFamily, // Register Material font families
		},
		extend: {},
	},
	plugins: [...materialTailwind.plugins],
}

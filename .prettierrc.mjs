// Docs: https://prettier.io/docs/en/configuration.html
/** @type {import("prettier").Config} */
export default {
	semi: true,
	trailingComma: "es5",
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

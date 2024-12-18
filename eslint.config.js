import globals from "globals";
import pluginJs from "@eslint/js";
import tslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import airbnbConfig from "eslint-config-airbnb";
import airbnbHooksConfig from "eslint-config-airbnb/hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			...airbnbConfig.rules,
			...airbnbHooksConfig.rules,
			...pluginJs.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
];

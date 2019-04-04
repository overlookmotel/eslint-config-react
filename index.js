/* --------------------
 * @overlookmotel/eslint-config-react module
 * ------------------*/

'use strict';

// Modules
const airbnb = require('eslint-config-airbnb');

// Exports
module.exports = {
	// Extend eslint-config-airbnb, omitting base rules
	// Base rules are in `@overlookmotel/eslint-config`
	extends: airbnb.extends.filter(path => !path.includes('/eslint-config-airbnb-base/')),

	// Alterations of airbnb rules
	rules: {
		'react/prop-types': ['off'],
		'react/destructuring-assignment': ['off'],
		'react/jsx-indent': ['error', 'tab', {checkAttributes: true}],

		// Temporarily disabled due to bug when using tabs
		// https://github.com/yannickcr/eslint-plugin-react/issues/2152
		// TODO Re-enable rule when new release including fix is released
		// https://github.com/yannickcr/eslint-plugin-react/commit/2c091dd968504b01999d0ef4059f1457dfab1892
		'react/jsx-one-expression-per-line': ['off']
	}
};

/*
// Exports
module.exports = {
	plugins: [
		'react'
	],
	extends: [
		'plugin:react/recommended'
	],
	rules: {
		'react/prop-types': ['off'],
		'no-extra-parens': ['error', 'all', {ignoreJSX: 'multi-line'}]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
*/

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

	env: {
		browser: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},

	// Alterations of airbnb rules
	rules: {
		'react/prop-types': ['off'],
		'react/destructuring-assignment': ['off'],
		'react/jsx-indent': ['error', 'tab', {checkAttributes: true}],
		'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
		'import/extensions': ['error', {
			js: 'never',
			jsx: 'always'
		}]
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

/* --------------------
 * `@overlookmotel/eslint-config-react` module
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
	parserOptions: {
		sourceType: 'module'
	},

	rules: {
		// Alterations of airbnb rules
		'react/destructuring-assignment': ['off'],
		'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.test.js']}],
		'react/jsx-indent': ['error', 'tab', {checkAttributes: true}],
		'react/jsx-indent-props': ['off'], // Clashes with ESLint `indent` rule
		'react/jsx-one-expression-per-line': ['off'],
		'react/jsx-props-no-spreading': ['off'],
		'react/no-multi-comp': ['off'],
		'react/prop-types': ['off'],
		'react/react-in-jsx-scope': ['off'],
		'no-underscore-dangle': ['off']
	}
};

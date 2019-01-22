/* --------------------
 * @overlookmotel/eslint-config-react module
 * ------------------*/

'use strict';

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

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

	rules: {
		// Alterations of airbnb rules
		'react/prop-types': ['off'],
		'react/destructuring-assignment': ['off'],
		'react/jsx-indent': ['error', 'tab', {checkAttributes: true}],
		'react/jsx-one-expression-per-line': ['off'],
		'import/extensions': ['error', {
			js: 'never',
			jsx: 'always'
		}],
		'no-underscore-dangle': ['off'],

		// Disable NodeJS rules which are enabled in `@overlookmotel/eslint-config`
		'node/no-extraneous-import': ['off'],
		'node/no-extraneous-require': ['off'],
		'node/no-missing-import': ['off'],
		'node/no-missing-require': ['off'],
		'node/no-unpublished-bin': ['off'],
		'node/no-unpublished-import': ['off'],
		'node/no-unpublished-require': ['off'],
		'node/no-unsupported-features/es-builtins': ['off'],
		'node/no-unsupported-features/es-syntax': ['off'],
		'node/no-unsupported-features/node-builtins': ['off'],
		'node/process-exit-as-throw': ['off'],
		'node/shebang': ['off'],
		'node/no-deprecated-api': ['off'],

		'node/exports-style': ['off'],
		'node/prefer-global/buffer': ['off'],
		'node/prefer-global/console': ['off'],
		'node/prefer-global/process': ['off'],
		'node/prefer-global/url-search-params': ['off'],
		'node/prefer-global/url': ['off']
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

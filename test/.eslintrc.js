/* --------------------
 * `@overlookmotel/eslint-config-react` module
 * ESLint tests config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^@overlookmotel/eslint-config-react$']}],
		'node/no-missing-require': ['error', {allowModules: ['@overlookmotel/eslint-config-react']}]
	}
};

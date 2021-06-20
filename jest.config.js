/* --------------------
 * `@overlookmotel/eslint-config-react` module
 * Jest config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['index.js', 'lib/**/*.js'],
	setupFilesAfterEnv: ['jest-extended'],
	moduleNameMapper: {
		'^@overlookmotel/eslint-config-react$': '<rootDir>/index.js'
	}
};

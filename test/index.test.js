/* --------------------
 * `@overlookmotel/eslint-config-react` module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfigReact = require('@overlookmotel/eslint-config-react');

// Tests

it('Exports an object', () => { // eslint-disable-line jest/lowercase-name
	expect(eslintConfigReact).toBeObject();
});

/* --------------------
 * @overlookmotel/eslint-config-react module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	eslintConfigReact = require('../index');

// Init
chai.config.includeStack = true;

// Tests

it('Exports an object', () => {
	expect(eslintConfigReact).to.be.an('object');
});

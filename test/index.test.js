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

describe('Tests', function() {
	it.skip('all', function() {
		expect(eslintConfigReact).to.be.ok;
	});
});

[![NPM version](https://img.shields.io/npm/v/@overlookmotel/eslint-config-react.svg)](https://www.npmjs.com/package/@overlookmotel/eslint-config-react)
[![Build Status](https://img.shields.io/travis/overlookmotel/eslint-config-react/master.svg)](http://travis-ci.org/overlookmotel/eslint-config-react)
[![Dependency Status](https://img.shields.io/david/overlookmotel/eslint-config-react.svg)](https://david-dm.org/overlookmotel/eslint-config-react)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/eslint-config-react.svg)](https://david-dm.org/overlookmotel/eslint-config-react)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/eslint-config-react.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/eslint-config-react/master.svg)](https://coveralls.io/r/overlookmotel/eslint-config-react)

# @overlookmotel's ESLint config for React

ESLint config for apps/libraries using React. Based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) with only React rules with some modifications.

## Usage

Add dev dependencies in `package.json`:

* `@overlookmotel/eslint-config-react`
* `babel-eslint`
* `eslint`
* `eslint-config-airbnb`
* `eslint-plugin-import`
* `eslint-plugin-react`
* `eslint-plugin-jsx-a11y`

Add to `.eslintrc`: `"extends": "@overlookmotel/eslint-config-react"`

NB Does not extend the base config [@overlookmotel/eslint-config](https://www.npmjs.com/package/@overlookmotel/eslint-config) so use `"extends": "@overlookmotel/eslint-config"` too in `.eslintrc`.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/eslint-config-react/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/eslint-config-react/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)

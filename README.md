[![NPM version](https://img.shields.io/npm/v/@overlookmotel/eslint-config-react.svg)](https://www.npmjs.com/package/@overlookmotel/eslint-config-react)
[![Build Status](https://img.shields.io/github/workflow/status/overlookmotel/eslint-config-react/Test.svg)](https://github.com/overlookmotel/eslint-config-react/actions)
[![Dependency Status](https://img.shields.io/david/overlookmotel/eslint-config-react.svg)](https://david-dm.org/overlookmotel/eslint-config-react)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/eslint-config-react.svg)](https://david-dm.org/overlookmotel/eslint-config-react)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/eslint-config-react/master.svg)](https://coveralls.io/r/overlookmotel/eslint-config-react)

# @overlookmotel's ESLint config for React

ESLint config for apps/libraries using React. Based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) with only React rules with some modifications.

## Usage

Add to `.eslintrc`: `"extends": "@overlookmotel/eslint-config-react"`

NB Does not extend the base config [@overlookmotel/eslint-config](https://www.npmjs.com/package/@overlookmotel/eslint-config) so use `"extends": "@overlookmotel/eslint-config"` too in `.eslintrc`.

Add dev dependencies in `package.json`:

* `@overlookmotel/eslint-config-react`
* `eslint`

If using NPM before v7, additionally add peer dependencies as dev dependencies in `package.json`:

* `eslint-plugin-import`
* `eslint-plugin-jsx-a11y`
* `eslint-plugin-react`
* `eslint-plugin-react-hooks`

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v12+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

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

# Changelog

## 7.1.0

Features:

* Drop support for Node v13

Dependencies:

* Update `eslint-config-airbnb` dependency
* Update peer dependencies

Dev:

* Replace `.npmignore` with `files` list in `package.json`
* Replace Mocha + Chai with Jest
* Update dev dependencies
* CI run tests on Node v14
* `.editorconfig` config
* Simplify lint scripts
* ESLint ignore all dot files
* Travis CI cache NPM

## 7.0.0

Breaking changes:

* Update ESLint peer dependencies

Rule changes:

* Remove unnecessary `import/extensions` rule

No code:

* Header code comments

Dependencies:

* Update `eslint-config-airbnb` dependency

Dev:

* Update dev dependencies
* Update `.gitignore` + `.npmignore`
* Tab width 2 in `.editorconfig`

## 6.0.0

Breaking changes:

* Do not disable node rules
* Modify `import/extensions` rule
* Drop support for Node v8

Features:

* Update peer dependencies

Dev:

* Run tests on CI on Node v13
* Update dev dependencies
* Remove `sudo` from Travis CI config
* ESLint ignore coverage dir

No code:

* Remove old commented-out code
* NPM ignore `.DS_Store` files

Docs:

* Versioning policy
* Update license year

## 5.0.0

Breaking changes:

* Downgrade `eslint-plugin-react-hooks` peer dependency to ^1.7.0 to match `eslint-config-airbnb`

## 4.0.0

Breaking changes:

* Update ESLint peer dependencies

Dev:

* Update dev dependencies

## 3.1.1

Rule changes:

* Disable `no-underscore-dangle` rule

Dev:

* Update dev dependencies

## 3.1.0

Rule changes:

* Update AirBnB config

Dev:

* Update dev dependencies

## 3.0.4

Rule changes:

* Disable `react/jsx-one-expression-per-line` rule
* Disable NodeJS rules

## 3.0.3

Dev:

* Update dev dependencies

## 3.0.2

Bug fixes:

* Set `env.browser`
* Use `babel-eslint` parser

## 3.0.1

Rule changes:

* Add `sourceType: 'module'`

## 3.0.0

Breaking changes:

* Drop support for Node v6
* Update dependencies + peer dependencies

Rule changes:

* Enable `react/jsx-one-expression-per-line` rule
* Add `import/extensions` rule

Dev:

* CI run tests on Node v12
* `package-lock.json`
* Update dev dependencies

Doc:

* Correct README

## 2.0.1

Dev:

* Update dev dependency `@overlookmotel/eslint-config`
* Update dev dependency `@overlookmotel/eslint-config-tests`
* Git ignore package-lock.json

## 2.0.0

Breaking changes:

* Base on airbnb config

Other:

* Update dependencies
* Tests: Fix lint error [refactor]

## 1.0.1

* README update
* Update dev dependency `@overlookmotel/eslint-config`
* Rename CI npm script `ci`
* NPM ignore `.gitattributes`

## 1.0.0

* Initial release

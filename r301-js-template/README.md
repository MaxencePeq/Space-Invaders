# Template Project for Game Development using **Phaser**

This repository provides a starter template for developing browser-based games with [**Phaser**](https://phaser.io/).

## Getting Started

Clone the repository:
```shell
git clone --depth=1 https://iut-info.univ-reims.fr/gitlab/jonque01/r301-js-template PROJECT_NAME
```

Remove the existing **Git** history:
```shell
cd PROJECT_NAME
rm -rf .git
```

Before creating your own local **Git** repository, you may want to update the [the *package.json* file](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) that store project information.

Install the project dependencies:
```shell
npm install
```


## Project Scripts

You can manage the project using [*npm scripts*](https://docs.npmjs.com/cli/v8/using-npm/scripts) defined in *package.json*.

### Development server
```shell
npm run dev
```
Runs the *dev* script, which starts **Vite**’s development server.

The local server serves static assets, compiles files, and automatically reloads the page when source files change.

### Build the project
```shell
npm run build
```
Runs the *build* script, which bundles the project into the *build* directory as a standalone version.

### Check of the builded project
```shell
npm run preview
```
Runs the *preview* script, which launches a local server to serve the standalone version from the *build* directory.

### Run the *linter* and fix code
```shell
npm run fix
```
Runs the *fix* script, which launches **ESLint** to lint the source code and automatically fix issues when possible.


## Project Dependencies

### Development environment
[**vite**](https://vite.dev/) is a fast **JavaScript** bundler that come with a development server.

### Game framwork
[**Phaser**](https://phaser.io/) is a 2D game framework for building browser-based games.

### Linter
[**ESLint**](https://eslint.org/) is a configurable **JavaScript** linter that helps enforce code quality. 

### Code formatter
[**Prettier**](https://prettier.io/) is a code formatter that ensures consistent code style.
This project is configured to integrate **Prettier** with **ESLint**.


## Linter Configuration
To simplify setup, this project uses [the **ESLint** configuration used by the **ESLint** team](https://github.com/eslint/eslint/tree/main/packages/eslint-config-eslint).

For convenience, the requirement for code documentation has been disabled in *eslint.config.js*.

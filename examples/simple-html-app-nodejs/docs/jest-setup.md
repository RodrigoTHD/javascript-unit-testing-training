# Install Jest

Execute the command below to install jest.

> Please, check the official jest documentation on the link [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started).

```sh
  yarn add --dev jest
```

## Adding jest scripts

Add the following scripts in the `package.json`.

```json
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
```

## Configuring es6 modules

```sh
 yarn add --dev babel-jest @babel/core @babel/preset-env
```

In the project's root folder, create the file `babel.config.js` with the configuration below to configure Babel to target your current version of Node.

```json
// babel.config.js

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

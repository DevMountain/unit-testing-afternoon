<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn about TTD ( test driven development ). Using Jest, we'll create Unit Tests for methods inside of `cart.js` and `user.js`. After the Unit Test is created, we'll create the method inside of `cart.js` and `user.js`. The TTD approach can lead to more confidence that the code you create meets all technical requirements. 

## Step 1

### Summary

In this step, we'll create a `package.json` and install `jest` so that we can create unit tests for `cart.js` and `user.js`.

### Instructions

* Initialze a `package.json` file.
* Install and save `jest` to development dependencies.
* Modify the `test` script inside of `package.json` to be `"jest"`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by initialzing a `package.json` file using `npm`. In a terminal, we can run the command `npm init -y` to get a `package.json` file with all the default values. Once a `package.json` file is created, we can install and save `jest` into our project. We'll want to save `jest` as a development dependency. Using `npm` in a terminal, we can run `npm install --save-dev jest` to install and save it. 

Lastly, we'll just need to update the `test` script in `package.json` to be `"jest"`. This will allow us to run `npm test` in a terminal.

</details>

### Solution

<details>

<summary> <code> package.json </code> </summary>

```js
{
  "name": "unit-testing-afternoon",
  "version": "1.0.0",
  "description": "Unit Testing - Day 1 - Jest",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DevMountain/unit-testing-afternoon.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DevMountain/unit-testing-afternoon/issues"
  },
  "homepage": "https://github.com/DevMountain/unit-testing-afternoon#readme",
  "devDependencies": {
    "jest": "^21.1.0"
  }
}
```

</details>

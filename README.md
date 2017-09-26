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

## Step 2

### Summary

In this step, we'll begin creating Unit Tests for `cart.js` by creating the skeleton of test file.

### Instructions

* Create a `cart.test.js` file.
* Open `cart.test.js`.
* Require `cart.js` into the file.
* Create a test group called `Quantity Functions:`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a `cart.test.js` file at the root level of the project. This is where we'll write all the tests for the `cart.js` file. We added a `.test` to the file extension so that Jest will be able to find this test file when executing. We could of also made a `__tests__` folder and stuck a JavaScript file in there. Now that we have a test file, let's require the module we want to test.

```js
const cart = require('./cart');
```

When we require `cart.js` we gain access to all its exported methods. You can view how many methods there are by opening `cart.js`. We can see that there are two methods that could fit inside a test group, the `increaseQuantity` and `decreaseQuantity` method. Using the `describe` keyword we can create a group for these two methods. The first `argument` for `describe` is the name of the group and the second `argument` is a callback function that holds all the test cases.

```js
const cart = require('./cart');

describe('Quantity Functions:', function() {
  
});
```

</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');

describe('Quantity Functions:', function() {
  
});
```

</details>

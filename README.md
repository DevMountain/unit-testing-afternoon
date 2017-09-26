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

In this step, we'll begin creating Unit Tests for `cart.js` by creating the skeleton of the test file.

### Instructions

* Create a `cart.test.js` file.
* Open `cart.test.js`.
* Require `cart.js` into the file.
* Require `data/cars.js` into the file.
* Create a test group called `Cart Properties:`.
* Create a test group called `Cart Methods:`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a `cart.test.js` file at the root level of the project. This is where we'll write all the tests for the `cart.js` file. We added a `.test` to the file extension so that Jest will be able to find this test file when executing. We could of also made a `__tests__` folder and stuck a JavaScript file in there. Now that we have a test file, let's require the module we want to test. We'll also want to require `data/cars.js` so we have the same dataset that `cart.js` is going to be working with.

```js
const cart = require('./cart');
const cars = require('./data/cars.js');
```

When we require `cart.js`, we gain access to all of its exported methods and properties. You can view how many methods and properties there are by opening `cart.js`. We can group the test cases specifically for the two cart properties into a group called `Cart Properties:` and we can group the test caes specifically for the three methods into a group called `Cart Methods:`. In Jest, you can create test groups by using the `describe` keyword. The first `argument` for `describe` is the name of the group and the second `argument` is a callback function that holds all the test cases.

```js
const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties:', function() {

});

describe('Cart Methods:', function() {
  
});
```

</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties:', function() {

});

describe('Cart Methods:', function() {
  
});
```

</details>

## Step 3

### Summary

In this step, we'll begin to add the tests into `cart.test.js` by using a list of specifications. This is similiar to how you would be asked to make Unit Tests on the job. You'll have the freedom to name the test whatever you want. Therefore, when viewing solutions pay attention to the logic of the test case rather than the name of it.

### Instructions

* Open `cart.test.js`.
* Create a test for the `cart` property:
  * This test should `expect` `cart` to be an empty Array.
    * Hint: test for type and length.
* Create a test for the `total` property: 
  * This test should `expect` `total` to be `0`.
    * Hint: test for value and type. `"0"` does not equal `0`.
* Create a test for the `addToCart` method:
  * This test should `expect` the cart length to increase by 1 on each call.
  * This test should `expect` the `car` object to appear at the end of the `cart` array.
* Create a test for the `addToCart` method:
  * This test should `expect` the `total` property to increase by the car object's price.
* Create a test for the `removeFromCart` method:
  * This test should `expect` the cart length to decrease by 1 on each call.
  * This test should `expect` the cart array maintain the order of car objects in the cart.
    * For example remove( 3 ): [ 1, 2, 3, 4, 5 ] -> [ 1, 2, 4, 5 ]


















## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>

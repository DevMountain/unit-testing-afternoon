<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn about TTD ( test driven development ). Using Jest, we'll create Unit Tests for methods and properties inside of `cart.js`. After the Unit Tests are created, we'll create the solution for `cart.js` to make all the Unit Tests pass. The TTD approach can lead to more confidence that the code you create meets all technical requirements.

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

In order to complete this step, you'll have to use Jest syntax that you may haven't seen yet. When testing the `methods` in `cart.js`, you'll need to reset the `cart` and `total` properties after each test. In order to do this, you can use the `afterEach` Jest method. The first argument is a callback function. This function will be called `after` `each` test. Here's an example of its syntax:

```js
afterEach(function() {
  // reset total property
  // reset cart to empty array
});
```

You can read more about it <a href="https://facebook.github.io/jest/docs/en/api.html#aftereachfn">here.</a>

### Instructions

* Open `cart.test.js`.
* Create a test for the `cart` property:
  * This test should `expect` `cart` to be an empty Array.
    * Hint: test for type and length.
* Create a test for the `total` property: 
  * This test should `expect` the `total` property to be `0`.
    * Hint: test for value and type. `"0"` does not equal `0`.
* Create a test for the `addToCart` method:
  * This test should `expect` the `cart` length to increase by 1 on each call.
  * This test should `expect` the `car` object to appear at the end of the `cart` array.
  * This method should have a single argument: the car object that is being added.
* Create a test for the `addToCart` method:
  * This test should `expect` the `total` property to increase by the car object's price on each call.
* Create a test for the `removeFromCart` method:
  * This test should `expect` the `cart` length to decrease by 1 on each call.
  * This test should `expect` the `cart` array to maintain the order of car objects in the `cart` array.
    * For example remove( 3 ): [ 1, 2, 3, 4, 5 ] -> [ 1, 2, 4, 5 ]
  * This method should have two arguments:
    * The first argument should be the index of the car object in the cart array.
    * The second argument should be the `price` property's value on the car object.
* Create a test for the `removeFromCart` method:
  * This test should `expect` the `total` property to decrease by the car object's price on each call.
* Create a test for the `checkout` method:
  * This test should `expect` the `cart` length to equal `0`.
  * This test should `expect` the `total` property to equal `0`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `cart.test.js` and taking a look at the `Cart Properties:` test group. For our `cart` to function correctly, we'll need the `cart` property to be an Array. To begin writing a test in Jest, we use the keyword `test`. `test` takes two arguments. The first argument is the name of the test and the second argument is a callback function that gets called to execute the test. The value you provide in the first argument is what you'll see in the terminal when running `npm test`. 

```js
describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {

  });
});
```

Inside the callback function we can use the keyword `expect` to define a test case. In this example, we can combine expect with the `isArray` Array prototype. `isArray` will return true or false depending on if the argument is an Array or not.

```js
describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    // Will equal true or false
    expect( Array.isArray( cart.cart ) )
  });
});
```

We can then chain on a `.toEqual` to our `expect` and provide the value we are expecting. 

```js
describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    // Will equal true or false
    expect( Array.isArray( cart.cart ) ).toEqual( true );
  });
});
```

To complete this test, we'll also want to make sure the cart defaults to being empty. We can do this with another `expect` statement in combination with the `length` Array prototype. We'll want to `expect` it to equal `0`.

```js
describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    expect( Array.isArray( cart.cart ) ).toEqual( true );
    expect( cart.cart.length ).toEqual( 0 );
  });
});
```

Let's move on to the `total` property. For our cart to work correctly, total will need to be of type `number` and default to `0`. We can test both of these using one `expect` statement. When using `.toEqual` it will test for value and type. This means that `.toEqual( 0 )` and `.toEqual( '0' )` are not the same.

```js
describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    expect( Array.isArray( cart.cart ) ).toEqual( true );
    expect( cart.cart.length ).toEqual( 0 );
  });
  
  test('Total should default to 0.', function() {
    expect( cart.total ).toEqual( 0 );
  });
});
```

That's all we need to test the properties of `cart.js`. Let's move on to the `Cart Methods:` test group. This test group is the larger of the two, therefore in the code snippets to follow I'll only show the code for the `test` block. These test blocks should go inside the test group. You can double check your work by looking at the solution code.

Let's begin by adding an `afterEach` at the top of the test group. We need an `afterEach` to reset the value of the `cart` and `total` properties. If we didn't reset these values it could cause unexpected results in our test cases. I'll go into more detail on this later on. Using the explanation in this step's summary, we should end up with:

```js
afterEach(function() {
  cart.cart = [];
  cart.total = 0;
});
```

Let's move on to our first method: `addToCart`. To test this method, we'll want to make sure that when we add a car to the cart, it is being pushed to the end of the cart array. We'll also want to test that the length is increased only by one each time. So how do we test what a method does when executed in Jest? Well according to the specifications, when the `addToCart` method is called, the `cart` and `total` properties should update. Therefore, we can actually call the `addToCart` method and then create `expect` statements for `cart` and `total`. To follow the convention of Unit Testing, each test should be as small as possible, so let's separate the tests for `cart` and `total` into two different test blocks.

```js
test('addToCart() should add a car object to the cart array.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[1] );

});

test('addToCart() should increase the total property.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[8] );
  cart.addToCart( cars[2] );

});
```

You may wonder if the number of times I called `addToCart` matters or if the specific `cars[ # ]` matters. It only matters to an extent. In order to test that car objects are being `pushed` into the end of the array, we need at least two car objects to test that `cars[1]` will come after `cars[0]`. However, if you wanted to, you could add more. In order to test that the price is being updated based on `car.price` you could test that with at least two car objects. As for the `cars[ # ]` you can use any valid car object in `data/cars.js`. So try not to get caught up in asking why I called a method `x` times or why did I use `cars[ # ]`. The take away here is the logic of the `expect` statements.

Getting back on topic, let's add some `expect` statements for our first test block. So we want to test car objects are being `pushed` to the end of the array and we want to test that the length is only increasing by one. Knowing this we can `expect` that `cart.cart[0]` equals `cars[0]`, we can `expect` that `cart.cart[1]` equals `cars[1]`, and we can `expect` that `cart.length` equals `2`.

```js
test('addToCart() should add a car object to the cart array.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[1] );

  expect( cart.cart.length ).toEqual( 2 );
  expect( cart.cart[0] ).toEqual( cars[0] );
  expect( cart.cart[1] ).toEqual( cars[1] );
});
```

Let's move on to our second test block. We are calling `addToCart` three times with `cars[0]`, `cars[8]`, and `cars[2]`. If our total is suppose to update based on a car object's `price` property, we should then `expect` `total` to equal the sum of `cars[0].price`, `cars[8].price`, and `cars[2].price`.

```js
test('addToCart() should increase the total property.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[8] );
  cart.addToCart( cars[2] );

  expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price );
});
```

Let's move on to our next method: `removeFromCart`. This is essentially the inverse of `addToCart`. We'll still need two tests, we'll still need to test the order of the `cart` array, and we'll still need to test the `total` property being updated. 

```js
test('removeFromCart() should remove a car object from the cart array.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[1] );
  cart.addToCart( cars[2] );

  cart.removeFromCart( 1, cars[1].price );

});

test('removeFromCart() should decrease the total property.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[8] );
  cart.addToCart( cars[2] );

  cart.removeFromCart( 0, cars[0].price );
  cart.removeFromCart( 1, cars[2].price );

});
```

Let's take a second to break down what's happening in the arguments of `removeFromCart`. The first argument is the index of the car as it appears in the cart. This allows us to quickly `splice` it out of the `cart` array. The second argument is the car object's `price` property. This allows us to quickly decrease the total by the price. This will lead to a very simple method when it comes time to code it.

In our first test block, we are calling `addToCart` three times with `cars[0]`, `cars[1]`, and `cars[2]`. We then remove `cars[1]` or in other words the middle of the Array. This means we should `expect` `cart.cart[0]` equals `cars[0]`, we should `expect` `cart.cart[1]` equals `cars[2]`, and we should `expect` `cart.length` equals `2`.

```js
test('removeFromCart() should remove a car object from the cart array.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[1] );
  cart.addToCart( cars[2] );

  cart.removeFromCart( 1, cars[1].price );

  expect( cart.cart.length ).toEqual( 2 );
  expect( cart.cart[0] ).toEqual( cars[0] );
  expect( cart.cart[1] ).toEqual( cars[2] );
});
```

Now let's test that the `total` is being decreased correctly. In our second test block, we are calling `addToCart` three times with `cars[0]`, `cars[8]`, and `cars[2]`. We then remove `cars[0]` and `cars[2]`. This means that there is only one car in the `cart` array. This means we should `expect` `total` equals `cars[8].price`.

```js
test('removeFromCart() should decrease the total property.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[8] );
  cart.addToCart( cars[2] );

  cart.removeFromCart( 0, cars[0].price );
  cart.removeFromCart( 1, cars[2].price );

  expect( cart.total ).toEqual( cars[8].price );
});
```

Let's move on to our last method: `checkout`. This method should be pretty easy to test. All we need to do here is add a random number of cars to our cart and then call the `checkout` method. We can then `expect` `cart` equals an empty array and we can then `expect` `total` equals `0`.

```js
test('checkout() shoud empty the cart array and set total to 0.', function() {
  cart.addToCart( cars[0] );
  cart.addToCart( cars[1] );
  cart.addToCart( cars[2] );
  cart.addToCart( cars[3] );

  cart.checkout();

  expect( cart.cart.length ).toEqual( 0 );
  expect( cart.total ).toEqual( 0 );
});
```

</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    expect( Array.isArray( cart.cart ) ).toEqual( true );
    expect( cart.cart.length ).toEqual( 0 );
  });
  
  test('Total should default to 0.', function() {
    expect( cart.total ).toEqual( 0 );
  });
});


describe('Cart Methods:', function() {
  afterEach(function() {
    cart.cart = [];
    cart.total = 0;
  });

  test('addToCart() should add a car object to the cart array.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[1] );

    expect( cart.cart.length ).toEqual( 2 );
    expect( cart.cart[0] ).toEqual( cars[0] );
    expect( cart.cart[1] ).toEqual( cars[1] );
  });

  test('addToCart() should increase the total property.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[8] );
    cart.addToCart( cars[2] );

    expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price );
  });
  
  test('removeFromCart() should remove a car object from the cart array.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[1] );
    cart.addToCart( cars[2] );
  
    cart.removeFromCart( 1, cars[1].price );
  
    expect( cart.cart.length ).toEqual( 2 );
    expect( cart.cart[0] ).toEqual( cars[0] );
    expect( cart.cart[1] ).toEqual( cars[2] );
  });

  test('removeFromCart() should decrease the total property.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[8] );
    cart.addToCart( cars[2] );

    cart.removeFromCart( 0, cars[0].price );
    cart.removeFromCart( 1, cars[2].price );

    expect( cart.total ).toEqual( cars[8].price );
  });

  test('checkout() shoud empty the cart array and set total to 0.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[1] );
    cart.addToCart( cars[2] );
    cart.addToCart( cars[3] );

    cart.checkout();

    expect( cart.cart.length ).toEqual( 0 );
    expect( cart.total ).toEqual( 0 );
  });
});
```

</details>

## Step 4

### Summary

In this step, we'll update our application to allow a previous cart and total to be restored, if the user's charge has failed.  This will involve changes to the `cart.test.js` and `cart.test.js` files.

### Instructions

* Still allowing for Test Driven Development, we need to add a new test.
* For your information, the name of the function to restore the state will be `failedCharge`, and we'll have two more variables, `oldCart` which will be an array, and `oldTotal`, which will be an integer.
* the "old" variables will have the original's values at checkout, and revert when `failedCharge` is called.

<details>

<summary> Detailed Instructions</summary>

<br />

We need to test that after the checkout happens, `oldCart` is set to the original value of `cart` before `cart` is reset to empty, and that `oldTotal` is set to the original value of `total` before it is set to zero.

```js
    test('checkout() should copy the cart array and total to the oldCart and oldTotal.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.oldCart.length).toEqual(4);
        expect(cart.oldCart[0]).toEqual(cars[0]);
        expect(cart.oldTotal).toEqual(cars[0].price + cars[1].price + cars[2].price + cars[3].price);
    });
```

Then, when `failedCharge` is called, it will transfer the values of `oldCart` and `oldTotal` to `cart` and `total`, and empty and zero out `oldCart` and `oldTotal`.

```js
    test('failedCharge() will set cart and total equal to oldCart and oldTotal.', function () {
        cart.oldCart.push(cars[0]);
        cart.oldCart.push(cars[1]);
        cart.oldCart.push(cars[2]);
        cart.oldCart.push(cars[3]);
        cart.oldTotal = cars[0].price + cars[1].price + cars[2].price + cars[3].price;

        cart.failedCharge();

        expect(cart.cart.length).toEqual(4);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.total).toEqual(cars[0].price + cars[1].price + cars[2].price + cars[3].price);
    });

    test('failedCharge() will empty the oldCart and oldTotal.', () => {
        cart.oldCart.push(cars[0]);
        cart.oldCart.push(cars[1]);
        cart.oldCart.push(cars[2]);
        cart.oldCart.push(cars[3]);
        cart.oldTotal = cars[0].price + cars[1].price + cars[2].price + cars[3].price;

        cart.failedCharge();

        expect(cart.oldCart.length).toEqual(0);
        expect(cart.oldTotal).toEqual(0);
    });
```

Don't forget to update your `Cart Properties:` tests, as well as the `AfterEach` procedures to accommodate the new functionality.
All of these changes will occurr in `cart.test.js`.

```js
    test('oldCart should default to an empty array.', function () {
        expect(Array.isArray(cart.oldCart)).toEqual(true);
        expect(cart.oldCart).toEqual([]);
        expect(cart.oldCart.length).toEqual(0);
    });

    test('oldTotal should default to 0.', function () {
        expect(cart.oldTotal).toEqual(0);
    });
```

```js
  describe('Cart Methods:', function () {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
        cart.oldCart = [];
        cart.total = 0;
    });
```

</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function () {
    test('Cart should default to an empty array.', function () {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart).toEqual([]);
        expect(cart.cart.length).toEqual(0);
    });

    test('Total should default to 0.', function () {
        expect(cart.total).toEqual(0);
    });
    
    test('oldCart should default to an empty array.', function () {
        expect(Array.isArray(cart.oldCart)).toEqual(true);
        expect(cart.oldCart).toEqual([]);
        expect(cart.oldCart.length).toEqual(0);
    });

    test('oldTotal should default to 0.', function () {
        expect(cart.oldTotal).toEqual(0);
    });
});


describe('Cart Methods:', function () {
    afterEach(function () {
        cart.cart = [];
        cart.total = 0;
        cart.oldCart = [];
        cart.total = 0;
    });

    test('addToCart() should add a car object to the cart array.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    });

    test('addToCart() should increase the total property.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        expect(cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price);
    });

    test('removeFromCart() should remove a car object from the cart array.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);
    });

    test('removeFromCart() should decrease the total property.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[2].price);

        expect(cart.total).toEqual(cars[8].price);
    });

    test('checkout() should empty the cart array and set total to 0.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    });

    test('checkout() should copy the cart array and total to the oldCart and oldTotal.', function () {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.oldCart.length).toEqual(4);
        expect(cart.oldCart[0]).toEqual(cars[0]);
        expect(cart.oldTotal).toEqual(cars[0].price + cars[1].price + cars[2].price + cars[3].price);
    });

    test('failedCharge() will set cart and total equal to oldCart and oldTotal.', function () {
        cart.oldCart.push(cars[0]);
        cart.oldCart.push(cars[1]);
        cart.oldCart.push(cars[2]);
        cart.oldCart.push(cars[3]);
        cart.oldTotal = cars[0].price + cars[1].price + cars[2].price + cars[3].price;

        cart.failedCharge();

        expect(cart.cart.length).toEqual(4);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.total).toEqual(cars[0].price + cars[1].price + cars[2].price + cars[3].price);
    });

    test('failedCharge() will empty the oldCart and oldTotal.', () => {
        cart.oldCart.push(cars[0]);
        cart.oldCart.push(cars[1]);
        cart.oldCart.push(cars[2]);
        cart.oldCart.push(cars[3]);
        cart.oldTotal = cars[0].price + cars[1].price + cars[2].price + cars[3].price;

        cart.failedCharge();

        expect(cart.oldCart.length).toEqual(0);
        expect(cart.oldTotal).toEqual(0);
    });

});

```

</details>

## Step 5

### Summary

In this step we'll update `cart.js` with the new functionality.

### Instructions

* Add the new variables and function to `cart.js`

<details>

<summary> Detailed Instructions </summary>

<br />

First open `cart.js` and add in the `oldCart` and `oldTotal` variables right after the `cart` and `total` variables.  Make sure to default them to match respectively.

```js
  cart: [],
  total: 0,
  oldCart: [],
  oldTotal: 0,
```

Now we need to update the `checkout()` function to copy `cart` and `total` to `oldCart` and `oldTotal` before resetting the originals.

```js
  checkout: function() {
    this.oldCart = this.cart;
    this.oldTotal = this.total;
    this.cart = [];
    this.total = 0;
  }
```

Lastly, create the `failedCharge()` function to copy `oldCart` and `oldTotal` back to `cart` and `total` before resetting them back to default.

```js
  failedCharge: function() {
    this.cart = this.oldCart;
    this.total = this.oldTotal;
    this.oldCart = [];
    this.oldTotal = 0;
  }
```

</details>

### Solution

<details>

<summary> <code> cart.js </code> </summary>

```js
const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,
  oldCart: [],
  oldTotal: 0,

  addToCart: function( car ) {
    this.cart.push( car );
    this.total += car.price;
  },

  removeFromCart: function( index, price ) {
    this.cart.splice( index, 1 );
    this.total -= price;
  },

  checkout: function() {
    this.oldCart = this.cart;
    this.oldTotal = this.total;
    this.cart = [];
    this.total = 0;
  },

  failedCharge: function() {
    this.cart = this.oldCart;
    this.total = this.oldTotal;
    this.oldCart = [];
    this.oldTotal = 0;
  }
};
```

</details>


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
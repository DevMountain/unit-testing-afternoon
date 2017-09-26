const cart = require('./cart');
const cars = require('./data/cars');

test('Cart should default to an empty array.', function() {
  expect( Array.isArray( cart.cart) ).toEqual( true );
  expect( cart.cart.length ).toEqual( 0 );
});

test('Total should default to 0.', function() {
  expect( cart.total ).toEqual( 0 );
  expect( typeof( cart.total ) ).toEqual( 'number' );
});

test('addToCart() should add a car object to the cart array.', function() {
  cart.addToCart( cars[0] );

  expect( cart.cart.length ).toEqual( 1 );
  expect( cart.cart[0] ).toEqual( cars[0] );
});

describe('Quantity Functions:', function() {

});

const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function( car ) {
    this.cart.push( car );
  },

  removeFromCart: function( index ) {

  },

  increaseQuantity: function() {

  },

  decreaseQuantity: function() {

  },

  checkout: function() {

  }
};
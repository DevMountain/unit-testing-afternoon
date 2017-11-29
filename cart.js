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
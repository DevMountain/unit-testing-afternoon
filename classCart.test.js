const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties', () => {
    //cart should default empty (the contents will be stored as an array)
    test('Cart defaults to empty', () => {
        expect(cart.cart).toEqual([])
        expect(cart.cart.length).toBe(0)
        expect(cart.cart.length === 0).toBeTruthy()
        expect(Array.isArray(cart.cart)).toBeTruthy()
    })
    //your shopping subtotal should default to 0
    test('Total defaults to 0', () => {
        expect(cart.total).toBe(0)
    })

})

describe('Cart Methods', () => {
    beforeEach(() => {
        cart.cart = []
        cart.total = 0
    })
    //you should be able to add cars to your shopping cart
    test('addToCart will accept one argument', () => {
        cart.addToCart(cars[3])
        cart.addToCart(cars[14])
        expect(cart.cart[0]).toEqual(cars[3])
        expect(cart.cart[1]).toEqual(cars[14])
        expect(cart.cart[1]).not.toEqual(cars[5])
    })
    //the contents of the cart will increase by one
    test('addToCart increases the size of the cart by one', () => {
        cart.addToCart(cars[5])
        expect(cart.cart.length).toBe(1)
    })
    //the subtotal will increase by the value of the car
    test('addToCart will increase the total by the value of the car', () => {
        cart.addToCart(cars[4])
        expect(cart.total).toEqual(cars[4]["price"])
    })

    //you should be able to remove things from your cart
    //the method for removal takes two arguments, the index of the car to be removed (in the array) and the value of the car to be removed
    //the contents of the cart will decrease by one
    test('removeFromCart will remove an item from the cart', () => {
        cart.cart = [cars[15], cars[13]]
        cart.removeFromCart(1, cars[13]["price"])
        expect(cart.cart.length).toBe(1)
    })
    //the car you removed will no longer be present, everything else should remain
    test('removeFromCart removes the RIGHT car from the cart', () => {
        cart.cart = [cars[15], cars[13], cars[2], cars[5], cars[5]]
        cart.removeFromCart(1, cars[13]["price"])
        expect(cart.cart).toEqual([cars[15], cars[2], cars[5], cars[5]])
    })
    //the value of the car will be removed from the subtotal
    test('removeFromCart will remove value from subtotal', () => {
        cart.cart = [cars[15], cars[13], cars[2], cars[5], cars[5]]
        cart.total = cars[15]["price"] + cars[13]["price"] + cars[2]["price"] + cars[5]["price"] + cars[5]["price"]
        cart.removeFromCart(1, cars[13]["price"])
        expect(cart.total).toEqual(cars[15]["price"] + cars[2]["price"] + cars[5]["price"] + cars[5]["price"])
    })

    //You should be able to checkout
    //most of this functionality will be developed separately (the merchant portion)
    //the cart should be empty again
    //the subtotal should return to 0
    test('checkout sets cart to empty', () => {
        cart.cart = [cars[15], cars[13], cars[2], cars[5], cars[5]]
        cart.checkout()
        expect(cart.cart.length).toBe(0)
        expect(cart.cart).toEqual([])
        expect(cart.cart).not.toEqual([cars[15], cars[13], cars[2], cars[5], cars[5]])
    })
    test('checkout sets total to 0', () => {
        cart.total = 65468732168765
        cart.checkout()
        expect(cart.total).toBe(0)
        expect(cart.total).not.toEqual(cars[15]["price"])
    })

})
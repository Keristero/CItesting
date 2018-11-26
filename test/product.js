var product = require('../product').product;
var expect = require('chai').expect;

describe('#product()', function() {

    context('without arguments', function() {
        it('should return 0', function() {
            expect(product()).to.equal(0)
        })
    })

    context('with number arguments', function() {
        it('should return product of arguments', function() {
            expect(product(1, 2, 3, 4, 5)).to.equal(120)
        })

        it('should return 0 when less than two arguments are passed', function() {
            expect(product(5)).to.equal(0)
        })
    })

    context('with non-number arguments', function() {
        it('should throw error', function() {
            expect(function() {
                product(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'product() expects only numbers.')
        })
    })
  
})
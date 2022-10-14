// Describe and it functions

var assert = require('assert');

describe.skip('Suíte - Mathematical Operations', function () {

  this.beforeEach(function (done) {
    
    this.timeout(5000)

    setTimeout(done, 3000)
  })

  it('Addiction of two numbers', function () {

    this.timeout(4000)

    var a = 10
    var b = 10

    var c = a + b

    assert.equal(c, 20)
  })

  it('Subtraction of two numbers', function (done) {

    //this.timeout(500)
    setTimeout(done, 1000)

    var a = 10
    var b = 10

    var c = a - b

    assert.equal(c, 0)
  })

  it('Multiplication of two numbers', function () {

    var a = 10
    var b = 10

    var c = a * b

    assert.equal(c, 100)
  })

  it('Division of two numbers', function () {

    var a = 10
    var b = 10

    var c = a / b

    assert.equal(c, 1)
  })

  it('This is a test for pending test feature')
})
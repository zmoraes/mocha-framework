const chai = require('chai')
const expect = chai.expect
const should = chai.should()

//assert - TDD style
const assert = chai.assert //no chaining possible


let a = 1, b = 1
expect(a).to.be.equals(b, 'test')
a.should.be.equals(b)
assert.equal(a, b, 'a and b are not equal')

//objeto retorna tipos diferentes.
function myObj() {
  return {
    a: 100,
    b: 'Hello'
  }
}

x = new myObj(), y = new myObj()
expect(x).to.be.an('object')
//expect(x).to.be.equals(y, 'x and y are not equal')

//use deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are not equal')
x.should.be.deep.equals(y, 'x and y are not equal')
assert.deepEqual(x, y, 'x and y are not equal')

//chaining expressions
// x is an object - x and y are equal
// keywords -> and, with, but, that e etc
expect(x).to.be.an('object').and.to.be.deep.equals(y)
x.should.be.an('object').and.to.be.deep.equals(y)

//arrays
let numbers = [1, 2, 3, 0]
expect(numbers).to.be.an('array').that.includes(3)
numbers.should.be.an('array').that.includes(1)
assert.isArray(numbers, 'numbers is not an array')

//Should Extras
//Should -> an Object.Prototype - a.should
//Existence of an object

// function writeToAFile(error){
//   //should extras

//   //normal scenario
//   //error.should.not.exist();

//   //given that error is undefined
//   should.not.exist(error)
// }

// writeToAFile(error, undefined)






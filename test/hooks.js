describe.skip('Mocha Hooks', function () {

  before('Execute before all teste', function () {
    console.log('Execute - Before all tests')
  })


  beforeEach('Execute before each all teste', function () {
    console.log('Execute - Before Each all tests')
  })


  after('Execute after all teste', function () {
    console.log('Execute - After all tests')
  })


  afterEach('Execute after each all teste', function () {
    console.log('Execute - After Each all tests')
  })

  it('Mocha hook tests', function () {
    console.log('Mocha - This is a Test for Mocha Hooks')
  })
})
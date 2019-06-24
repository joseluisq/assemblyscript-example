import { Calculator } from './'

describe('Calculator Test Suite', () => {

  test('should calculate factorial of one number properly', () => {
    expect(
      Calculator.factorial(4)
    ).toBe(24)
  })

})

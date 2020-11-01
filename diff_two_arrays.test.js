const { test, expect } = require('@jest/globals')
const diffArray = require('./diff_two_arrays')

// smoke test

const smokeTest = () => {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toBe([4])
  expect(
    diffArray(
      ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
      ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
    )
  ).toBe(['diorite', 'pink wool'])
}
test('smoke tests', smokeTest)

// edge case test

// automatically generated test for random cases

// theoretical test

// mutation test

// performance test

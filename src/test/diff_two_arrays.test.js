const { test, expect } = require('@jest/globals')
const diffArray = require('../intermediate-algorithm/diff_two_arrays')

// smoke test

const smokeTest = () => {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4])

  // the order of its elements in an array has no restriction
  // what to check is the actual array contains the expected array
  // and the actual and the expected has same length
  expect(
    diffArray(
      ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
      ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
    )
  ).toEqual(expect.arrayContaining(['diorite', 'pink wool']))
  expect(
    diffArray(
      ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
      ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
    )
  ).toHaveLength(2)
}
test('smoke tests', smokeTest)

// edge case test

// automatically generated test for random cases

// theoretical test

// mutation test

// performance test

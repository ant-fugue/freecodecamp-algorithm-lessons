const { test, expect } = require('@jest/globals')
const destroyer = require('./seek_and_destroy')

// smoke test

const smokeTest = () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2)).toEqual([1, 3, 1, 3])
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1])
  expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1])

  // the required output is [null, 3] for this function, but
  // if arr contains mark initially, destroyer also eliminates original mark
  // so, it is better to use random value as mark if you have fluent computing resource.
  expect(destroyer([null, 2, 3], 2)).toEqual([3])
}
test('smoke tests', smokeTest)

// edge case test
const edgeCaseTest = () => {
  expect(destroyer([1, 2, 3])).toEqual([1, 2, 3])
  // expect(destroyer([1, 2, 3, 1, 2], [2, 3])).toEqual(?)
}

test('edge case tests', edgeCaseTest)
// automatically generated test for random cases
const generateRandomArray = (maxArraySize, maxValue) => {
  const arraySize = Math.floor(Math.random() * maxArraySize)
  const randomArray = new Array(arraySize)
  randomArray.map((elem) => Math.floor(Math.random * maxValue))
  return randomArray
}

// theoretical test

// mutation test

// performance test

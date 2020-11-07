const { test, expect } = require('@jest/globals')
const Stack = require('./stack_class')

// smoke test

const smokeTest = () => {
  let s = new Stack()
  s.push(10)
  s.push(20)
  s.push(30)
  expect(s.collection).toEqual([10, 20, 30])
  s.pop()
  expect(s.peek()).toEqual(20)
  expect(s.isEmpty()).toBe(false)
  s.clear()
  expect(s.isEmpty()).toBe(true)
}

test('smoke tests', smokeTest)

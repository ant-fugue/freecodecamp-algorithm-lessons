const { test, expect } = require('@jest/globals')
const Queue = require('../data-structures/queue_class')

// smoke test

const smokeTest = () => {
  const q = new Queue()
  expect(q.size()).toBe(0)
  q.enqueue(10)
  q.enqueue(20)
  q.enqueue(30)
  expect(q.size()).toBe(3)
  expect(q.collection).toEqual([10, 20, 30])
  expect(q.front()).toEqual(10)
  q.dequeue()
  expect(q.front()).toEqual(20)
  expect(q.isEmpty()).toBe(false)
  q.clear()
  expect(q.isEmpty()).toBe(true)
}

test('smoke tests', smokeTest)

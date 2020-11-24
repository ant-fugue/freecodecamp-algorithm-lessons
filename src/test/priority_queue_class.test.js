const { test, expect } = require('@jest/globals')
const PriorityQueue = require('../data-structures/priority_queue_class')

// smoke test

const smokeTest = () => {
  const q = new PriorityQueue()
  expect(q.size()).toEqual(0)
  q.enqueue(['a', 1])
  q.enqueue(['b', 1])
  q.enqueue(['c', 1])
  expect(q.size()).toEqual(3)
  expect(q.collection).toEqual([
    ['a', 1],
    ['b', 1],
    ['c', 1],
  ])
  expect(q.front()).toEqual('a')
  q.dequeue()
  expect(q.front()).toEqual('b')
  expect(q.isEmpty()).toBe(false)
  q.clear()
  expect(q.isEmpty()).toBe(true)
}

test('smoke tests', smokeTest)

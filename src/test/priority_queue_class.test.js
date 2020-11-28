const { test, expect } = require('@jest/globals')
const PriorityQueue = require('../data-structures/priority_queue_class')

// smoke test

const smokeTest = () => {
  const q = new PriorityQueue()
  expect(q.size()).toEqual(0)
  q.enqueue(['apple', 3])
  q.enqueue(['banana', 2])
  q.enqueue(['crab', 1])
  q.enqueue(['dog', 1])
  q.enqueue(['ebook', 2])
  q.enqueue(['fun', 3])
  expect(q.size()).toEqual(6)
  expect(q.collection).toEqual([
    ['crab', 1],
    ['dog', 1],
    ['banana', 2],
    ['ebook', 2],
    ['apple', 3],
    ['fun', 3],
  ])
  expect(q.front()).toEqual('crab')
  q.dequeue()
  expect(q.front()).toEqual('dog')
  expect(q.isEmpty()).toBe(false)
  q.clear()
  expect(q.isEmpty()).toBe(true)
}

test('smoke tests', smokeTest)

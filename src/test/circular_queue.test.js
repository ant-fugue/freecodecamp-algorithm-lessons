const { test, expect } = require('@jest/globals')
const CircularQueue = require('../data-structures/circular_queue')

// smoke test

const smokeTest = () => {
  const q = new CircularQueue(5)
  expect(q.print()).toEqual([null, null, null, null, null])
  q.enqueue('a')
  q.enqueue('b')
  q.enqueue('c')
  expect(q.print()).toEqual(['a', 'b', 'c', null, null])
  q.dequeue()
  q.dequeue()
  q.dequeue()
  expect(q.print()).toEqual([null, null, null, null, null])
  q.enqueue('d')
  q.enqueue('e')
  q.enqueue('f')
  expect(q.print()).toEqual(['f', null, null, 'd', 'e'])
  q.dequeue()
  q.dequeue()
  q.dequeue()
  expect(q.print()).toEqual([null, null, null, null, null])
}

test('smoke tests', smokeTest)

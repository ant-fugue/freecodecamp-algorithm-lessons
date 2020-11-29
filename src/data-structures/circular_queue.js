// summary of a Circular Queue

// A circular queue is a queue that writes to the end of a collection
// then begins overwriting itself at the beginning of the collection

// expected results:

// The enqueue method should add items to the circular queue -> ok😀
// You should not enqueue items past the read pointer -> no😰
// The dequeue method should dequeue items from the queue ->  ok😀
// After an item is dequeued, its position in the queue should be reset to null -> ok😀
// Trying to dequeue past the write pointer
// The dequeue method should dequeue items from the queue -> no😰

class CircularQueue {
  constructor(size) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    // the size of Queue is fixed
    // queue addresses are filled with null
    // there is no empty address in a queue
    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }

  print() {
    return this.queue
  }

  enqueue(item) {
    // reaching the end of the queue, the writer moves to the top
    if (this.max < this.write) {
      this.write = 0
    }
    this.queue.splice(this.write, 1, item)
    this.write++
  }

  dequeue() {
    // reaching the end of the queue, the reader moves to the top
    if (this.max < this.read) {
      this.read = 0
    }
    let removedItem = this.queue[this.read]
    this.queue[this.read] = null
    this.read++
    return removedItem
  }
}

module.exports = CircularQueue

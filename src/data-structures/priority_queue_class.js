// A Priority Queue is a special type of Queue in which
// items may have additional information which specifies their priority.
// This could be simply represented with an integer.
// Item priority will override placement order
// in determining the sequence items are dequeued.
// If an item with a higher priority is enqueued
// after items with lower priority, the higher priority item
// will be dequeued before all the others.

class PriorityQueue {
  constructor() {
    this.collection = []
    this.print = () => console.log(this.collection)
  }

  // I couldn't work well, so I referenced this page for the enqueue method
  // https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-create-a-priority-queue-class/301630
  // I'm not really sure how this method works well...
  // I"ll write more test and check how it works and its limitation
  enqueue(arr) {
    this.collection = this.collection.reverse()
    let found_index = this.collection.findIndex((item) => item[1] <= arr[1])
    if (found_index === -1) {
      this.collection.push(arr)
    } else {
      this.collection.splice(found_index, 0, arr)
    }
    this.collection = this.collection.reverse()
  }

  // removes the first element from queue and returns it
  dequeue() {
    return this.collection.shift()[0]
  }

  // returns the element which will be picked up when dequeue() is called
  front() {
    return this.collection[0][0]
  }

  // return the number of items on a queue
  size() {
    return this.collection.length
  }

  // check if the queue is empty.
  isEmpty() {
    if (this.collection.length === 0) return true
    else return false
  }

  // removes all elements from the stack.
  clear() {
    this.collection = []
  }
}

// const q = new PriorityQueue()
// q.enqueue(['a', 1])
// q.print()
// q.enqueue(['b', 1])
// q.print()
// q.enqueue(['c', 1])
// q.print()

module.exports = PriorityQueue

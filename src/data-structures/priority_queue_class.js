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
    let collection = []
    this.collection = collection
    this.print = () => console.log(collection)
  }
  // pushes an element to the tail of the queue
  enqueue(arr) {
    this.collection.push(arr)

    // for (let i = 0; i < this.collection.length; i++) {
    //   if (this.collection === []) {
    //     this.collection.push(arr)
    //     break
    //   } else if (arr[1] === this.collection[i][1]) {
    //     let tmp = this.collection[i - 1]
    //     this.collection.splice(i - 1, 1, arr)
    //     this.collection.splice(i)
    //     break
    //   }
    // }
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

module.exports = PriorityQueue

/* 
  Queue class implementation is almost same with Stack class
  The difference is how to pick up a item and show the top element
  In Stack class, pop(), which picks up last item on an array
  is used to pick an item from collection
  While in Queue class, shift(), which picks up top item, is used
  In Stack class, peek() method returns the last element on a collection
  While in Stack class, top() method return the first element on a collection
*/

class Queue {
  constructor() {
    let collection = []
    this.collection = collection
    this.print = () => console.log(collection)
  }
  // pushes an element to the tail of the queue
  enqueue(val) {
    this.collection.push(val)
  }

  // removes the first element from queue and returns it
  dequeue() {
    return this.collection.shift()
  }

  // returns the element which will be picked up when dequeue() is called
  front() {
    return this.collection[0]
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

module.exports = Queue

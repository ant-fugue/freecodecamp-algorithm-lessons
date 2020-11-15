/* 
  Write an enqueue method that pushes an element to the tail of the queue, 
  a dequeue method that removes and returns the front element, 
  a front method that lets us see the front element, 
  a size method that shows the length, 
  and an isEmpty method to check if the queue is empty.
 */

class Queue {
  constructor() {
    let collection = []
    this.collection = collection
    this.print = () => console.log(collection)
  }
  enqueue(val) {
    this.collection.push(val)
  }
  dequeue() {
    return this.collection.shift()
  }
  front() {
    return this.collection[0]
  }
  size() {
    return this.collection.length
  }
  isEmpty() {
    if (this.collection.length === 0) return true
    else return false
  }
  clear() {
    this.collection = []
  }
}

const q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.print()
console.log(q.front())
console.log(q.size())
q.dequeue()
q.print()

module.exports = Queue

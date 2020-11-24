class Stack {
  constructor() {
    let collection = []
    this.collection = collection
    this.print = () => console.log(collection)
  }

  // pushes an element to the top of the stack
  push(val) {
    this.collection.push(val)
  }

  // removes and returns the element on the top of the stack
  pop() {
    return this.collection.pop()
  }

  // returns the element which will be picked up when pop() is called
  peek() {
    return this.collection[this.collection.length - 1]
  }

  // return the number of items on a stack
  size() {
    return this.collection.length
  }

  // checks if the stack is empty
  isEmpty() {
    if (this.collection.length === 0) return true
    else return false
  }

  // removes all elements from the stack.
  clear() {
    this.collection = []
  }
}

module.exports = Stack

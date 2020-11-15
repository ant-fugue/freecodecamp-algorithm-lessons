/* 
  Write a push method that pushes an element to the top of the stack, 
  a pop method that removes and returns the element on the top of the stack, 
  a peek method that looks at the top element in the stack, 
  an isEmpty method that checks if the stack is empty, 
  and a clear method that removes all elements from the stack.
 */

class Stack {
  constructor() {
    let collection = []
    this.collection = collection
    this.print = () => console.log(collection)
  }
  push(val) {
    this.collection.push(val)
  }
  pop() {
    return this.collection.pop()
  }
  peek() {
    return this.collection[this.collection.length - 1]
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

module.exports = Stack

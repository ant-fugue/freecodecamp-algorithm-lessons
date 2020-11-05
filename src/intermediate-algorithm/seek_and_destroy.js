/* 
You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

/**
 * @param {arr[]} arr
 * @param {arguments} args
 * @return {arr[]} arr
 */

const destroyer = (arr, ...args) => {
  // set mark if an element of arr is equal to an element of args
  // remove marked element of array
  // reassign it to arr and return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) arr[i] = null
    }
  }
  arr = arr.filter((elem) => elem !== null)
  return arr
}

module.exports = destroyer

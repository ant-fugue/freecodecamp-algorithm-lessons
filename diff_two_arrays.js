/* 
  Compare two arrays and return a new array with any items 
  only found in one of the two given arrays, but not both. 
  In other words, return the symmetric difference of the two arrays.

  Note:
  You can return the array with its elements in any order.
*/

/**
 * @param {arr[]} arr1
 * @param {arr[]} arr2
 * @return {arr[]} newArr
 */

// concat arrays and remove duplicate
const diffArray = (arr1, arr2) => {
  let newArr = []
  let mergedArr = arr1.concat(arr2)
  newArr = mergedArr.filter(
    // if the index and lastIndex of an element is same
    // it means there are duplicates of the element
    (elem, i, self) => self.indexOf(elem) === self.lastIndexOf(elem)
  )
  return newArr
}

module.exports = diffArray

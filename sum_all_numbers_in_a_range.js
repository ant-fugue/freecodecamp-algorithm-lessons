/* 
  We'll pass you an array of two numbers. 
  Return the sum of those two numbers plus the sum of all the numbers between them.
  The lowest number will not always come first.

*/

const sumAll = (arr) => {
  if (arr.length <= 1) return 'undefined: array must contains more than 2 elements'
  else {
    let numList = []
    const iota = (min, max) => {
      let tmp
      if (max < min) {
        tmp = max
        max = min
        min = tmp  
      }
      for (let i = min; i < max + 1; i++) {
        numList.push(i)
      }
    }
    iota(arr[0], arr[1])
    return numList.reduce((previous, current) => previous + current)
  }
}

module.exports = sumAll



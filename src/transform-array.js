const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  let result = ''
  let remove
  let doble
  let newArr = []
  let x =[]
  
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  array.forEach((i, index) => {
    if (i == '--discard-prev') {
       result = result.slice(0,[index-1])
    } else if (i == '--discard-next') {
      remove = index
    } else if  (i == '--double-next') {
      doble = index
    } else if  (i == '--double-prev') {
      result += result[index-1]
    } else {
      result += i
    }
  })

  newArr =result.split('')

  newArr.forEach((i,indexx) => {
    if (indexx == remove) {
      x.push()
    } else if (indexx == doble) {
      x.push(Number(i))
      x.push(Number(i))
  } else {
    x.push(Number(i))
  }
  
})
return(x)
}

module.exports = {
  transform
};

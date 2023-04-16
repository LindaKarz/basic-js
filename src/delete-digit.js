const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n)

  if (str.length == 3 && Number(str[0]) < Number(str[1])) {
    return(Number(str.replace(str[0], ''))) 
  } else {
  let arr = str.split('').sort((a,b) => a-b)
  let aim = arr[0]
  str = str.replace(aim, '')
  return(Number(str))
  }
}

module.exports = {
  deleteDigit
};

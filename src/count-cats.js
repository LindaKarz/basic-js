const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let catsNumber = 0;
  backyard.forEach(i => {
    i.forEach(x => {
        if (x == '^^') catsNumber += 1
    })
})
return(catsNumber)
}

module.exports = {
  countCats
};

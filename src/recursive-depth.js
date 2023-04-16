const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    if (array.length === 0) {
      return 1;
    }

    let result = 1

    array.forEach(i => {
      if (typeof(i) == 'object') {
        result += 1

        if (typeof(i.flat()) == 'object') {
          result += 1 
        }
      }
    })

    return(result)
  }
}

module.exports = {
  DepthCalculator
};

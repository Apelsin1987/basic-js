const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let zerosArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let elem = row[j];
      if (elem === 0) {
        if (!zerosArr.includes(j)) {
          zerosArr.push(j);
        }
      } else {
        if (!zerosArr.includes(j)) {
          sum += elem;
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

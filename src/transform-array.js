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
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = [];
  let currentElem;
  let discard = false;
  let discardDiscardPrev = false;
  for (let i = 0; i < arr.length; i++) {
    if (discard) {
      discard = false;
      discardDiscardPrev = true;
      continue;
    }
    currentElem = arr[i];
    if (currentElem === '--double-next') {
      currentElem = arr[i + 1];
      if (currentElem) {
        newArr.push(currentElem);
      }
    } else if (currentElem === '--double-prev') {
      if (discardDiscardPrev) {
        discardDiscardPrev = false;
        continue;
      }
      currentElem = arr[i - 1];
      if (currentElem) {
        newArr.push(currentElem);
      }
    } else if (currentElem === '--discard-next') {
      discard = true;
    } else if (currentElem === '--discard-prev') {
      if (discardDiscardPrev) {
        discardDiscardPrev = false;
        continue;
      }
      newArr.splice(i-1, 1);
    } else {
      newArr.push(currentElem);
    }
    discardDiscardPrev = false;
  }
  return newArr;
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str === '') {
    return str;
  }
  let count = 1;
  let previous = str[0];
  let returnStr = '';

  for (let i = 1; i < str.length; i++){
    char = str[i];

    if (char === previous) {
      count++;
    } else {
      returnStr += (count > 1 ? count : '') + previous;
      count = 1;
    }
    previous = char;
    if (i === str.length - 1) {
      returnStr += (count > 1 ? count : '') + previous;
    }
  }

  return returnStr;
}

module.exports = {
  encodeLine
};

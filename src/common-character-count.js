const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (s1.trim() === '' || s2.trim() === '') {
    return 0;
  }

  s1Object = getCountObject(s1);
  s2Object = getCountObject(s2);
  let count = 0;
  for (const char in s1Object) {

    if (s2Object[char]) {
      count += Math.min(s1Object[char], s2Object[char]);
    }
  }

  return count;

}

function getCountObject(s) {
  const countObject = {};
  for (const char of s) {
    countObject[char] = (countObject[char] || 0) + 1;
  }
  return countObject;
}

module.exports = {
  getCommonCharacterCount
};

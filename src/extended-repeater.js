const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let returnStr = '';
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addition = options.hasOwnProperty('addition') ? '' + options.addition : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  let i;

  str = '' + str;


  if (addition !== '' && additionRepeatTimes > 0) {
    for (i = 0; i < additionRepeatTimes; i++) {
      if (i > 0) {
        str += additionSeparator + addition;
      } else {
        str += addition;
      }
    }
  }

  if (options.hasOwnProperty('repeatTimes') && options.repeatTimes > 0) {
    for (i = 0; i < options.repeatTimes; i++) {
      if (i > 0) {
        returnStr += separator + str;
      } else {
        returnStr += str;
      }
    }
  } else {
    returnStr = str;
  }


  return returnStr;
}

module.exports = {
  repeater
};

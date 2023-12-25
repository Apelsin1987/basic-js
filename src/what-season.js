const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const monthsDaysCount = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');
  try {
    date.toLocaleString();
  } catch (error) {
    if (error) throw new Error('Invalid date!');
  }

  const month = date.getMonth() + 1;
  const day = date.getDay();
  // const countDays = monthsDaysCount[month];
  // if (day > countDays) throw new Error('Invalid date!');
  if (month < 3 || month === 12) return 'winter';
  if (month >= 3 && month < 6) return 'spring';
  if (month >= 6 && month < 9) return 'summer';
  if (month >= 9 && month < 12) return 'autumn';
}

module.exports = {
  getSeason
};

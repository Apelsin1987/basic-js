const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let itemArray;
  let statsObj = {};
  domains.forEach(item => {
    let prevStat = '';
    itemArray = item.split('.');
    itemArray.reverse();
    for (const stat of itemArray) {
      currentStat = prevStat + '.' + stat;
      statsObj[currentStat] = (statsObj[currentStat] || 0) + 1;
      prevStat = currentStat;
    }
  });

  return statsObj;
}

module.exports = {
  getDNSStats
};

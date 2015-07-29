module.exports = function (url) {
  var cal = '../cal/cal.js';
  var lvl1 = url.split('/')[2];
  var lvl2 = url.split('/')[3];

  if (lvl1 === undefined && lvl2 === undefined) {
    // no args
    // current month
    return cal;
  }

  if (lvl2 === undefined && +lvl1) {
    // one valid arg
    // full year
    return cal + ' ' + lvl1;
  }

  if (+lvl1 && +lvl2) {
    // two valid args
    // month in year
    if (lvl1 > 12) {
      // year/month
      return cal + ' ' + lvl2 + ' ' + lvl1;
    } else {
      // month/year
      return cal + ' ' + lvl1 + ' ' + lvl2;
    }
  }
};

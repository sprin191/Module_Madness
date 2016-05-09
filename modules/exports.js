var randomNumber = require('./randomnumber.js');
var usd = require('./USD_converter.js');


var exports = function () {
  return usd(randomNumber(100, 1000000));
};

var balance = function () {
  return 'Account balance: \n';
};

module.exports.e = exports;
module.exports.b = balance;

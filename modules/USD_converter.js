var usd = function (num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ',');
};

module.exports = usd;

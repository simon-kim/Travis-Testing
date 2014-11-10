var Counter = function() {
  this.count = 0;
};

Counter.prototype.increment = function() {
  this.value++;
};

Counter.prototype.value = function() {
  return this.value;
};

module.exports = Counter;

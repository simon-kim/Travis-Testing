var Counter = function() {
  this.count = 0;
};

Counter.prototype.increment = function() {
  this.value++;
};

var cntr = new Counter();
module.exports = Counter;

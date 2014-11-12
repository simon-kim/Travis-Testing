var chai = require("chai");
var expect = require("chai").expect;
var Counter = require("../index");

describe('the counter', function() {
  it("should be 0", function() {
    expect(cntr.count).to.eql(0);
  });

  it("should increment by 1", function() {
    Counter.increment();
    expect(cntr.count).to.eql(1);
  });
});

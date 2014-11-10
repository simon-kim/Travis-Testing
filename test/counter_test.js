var chai = require("chai");
var expect = require("chai").expect;
var Counter = require("../index");

describe('the counter', function() {
  it("should be 0", function() {
    expect(Counter.value).to.eql(0);
  });

  it("should increment by 1", function() {
    Counter.increment();
    expect(Counter.value).to.eql(1);
  });
});

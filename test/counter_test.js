var chai = require("chai");
var expect = require("chai").expect;
var cntr = require("../index");

describe('the counter', function() {
  it("should be 0", function() {
    expect(cntr.count).to.eql(0);
  });

  it("should increment by 1", function() {
    cntr.increment();
    expect(cntr.count).to.eql(1);
  });
});

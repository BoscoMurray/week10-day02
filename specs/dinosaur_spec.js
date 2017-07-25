var assert = require( "assert" );
var Dinosaur = require( "../dinosaur.js" );

describe("Dinosaur", function() {
  var trex;

  beforeEach(function() {
    trex = new Dinosaur( "trex", 1 );
  })

  it("can set type", function() {
    assert.strictEqual( trex.type, "trex" );
  })

  it("can set offspring per year", function() {
    assert.strictEqual( trex.offspring, 1 );
  })

})
var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" );

describe("Park", function() {
  var park;
  var trex;
  var raptor;

  beforeEach(function() {
    park = new Park();
    trex = new Dinosaur( "trex", 1 );
    raptor = new Dinosaur( "raptor", 3 );
  })

  it("park enclosure starts empty", function() {
    assert.strictEqual( park.enclosure.length, 0 );
  })

  it("park can add dinosaur to enclosure", function() {
    park.addDinosaur(trex);
    assert.strictEqual( park.enclosure.length, 1 );
  })

})
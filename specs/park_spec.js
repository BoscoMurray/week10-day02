var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" );

describe("Park", function() {
  var park;
  var trex1;
  var trex2;
  var raptor;

  beforeEach(function() {
    park = new Park();
    trex1 = new Dinosaur( "trex", 1 );
    trex2 = new Dinosaur( "trex", 1 );
    raptor = new Dinosaur( "raptor", 3 );
  })

  it("park enclosure starts empty", function() {
    assert.strictEqual( park.enclosure.length, 0 );
  })

  it("park can add dinosaur to enclosure", function() {
    park.addDinosaur(trex1);
    assert.strictEqual( park.enclosure.length, 1 );
  })

  it("can remove all of a type of dinosaur", function() {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(raptor);
    park.removeType("trex");
    assert.strictEqual( park.enclosure.length, 1 );
  })

  it("can get dinosaurs with offspring greater than 2", function() {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(raptor);
    assert.strictEqual( park.breaders().length, 1);
  })

})
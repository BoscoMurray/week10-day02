var Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeType = function(type) {
  var tempArray = [];
  for (var i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type !== type) {
      tempArray.push( this.enclosure[i] );
    }
  }
  this.enclosure = tempArray;
}

module.exports = Park;
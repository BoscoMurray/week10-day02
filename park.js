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

Park.prototype.breaders = function() {
  var tempArray = [];
  for (var i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].offspring >= 2) {
      tempArray.push( this.enclosure[i] );
    }
  }
  return tempArray;
}

Park.prototype.yearsPassed = function(years) {
  var tempArray = [];
  for (var a = 0; a < years; a++) {
    for (var b = 0; b < this.enclosure.length; b++) {
      var quantityBabies = this.enclosure[b].offspring;
      for (var c = 0; c < quantityBabies; c++) {
        tempArray.push(this.enclosure[b]);
      }
    }
    Array.prototype.push.apply(this.enclosure, tempArray);
    tempArray = [];
  }
}



module.exports = Park;
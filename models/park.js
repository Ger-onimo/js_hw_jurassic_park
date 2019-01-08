const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
};

Park.prototype.addDinosaur = function (dinoCollection) {
  this.dinoCollection.push(dinoCollection);
};

Park.prototype.removeDinosaur = function () {

};

module.exports = Park

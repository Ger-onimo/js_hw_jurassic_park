

const Park = function(name, ticketPrice, dinoCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = dinoCollection;
};

Park.prototype.addDinosaur = function(dinosaurName) {
  this.dinoCollection.push(dinosaurName);
};

// Park.prototype.removeDinosaur = function(dinosaurName) {
//   // const indexOfDinos = this.dinoCollection.indexOf(dinosaurName);
//   this.dinoCollection.splice(this.dinoCollection.indexOf(dinosaurName), 1);
// };




module.exports = Park

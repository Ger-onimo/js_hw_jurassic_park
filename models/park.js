

const Park = function(name, ticketPrice, dinoCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = dinoCollection;
};

Park.prototype.addDinosaur = function(dinosaurName) {
  this.dinoCollection.push(dinosaurName);
};

Park.prototype.removeDinosaur = function(dinosaurName) {
const indexOfDinos = this.dinoCollection.indexOf(dinosaurName);
  this.dinoCollection.splice(indexOfDinos, 1);
};

Park.prototype.findDinosaur = function(speciesName) {
  return this.dinoCollection.filter(dino => dino.species === speciesName)
};

// Park.prototype.removeSpecies = function (speciesName) {
//   const foundSpecies = [];
//
//   for(const species in this.dinoCollection) {
//     if(species !== speciesName) {
//       foundSpecies.push(species);
//     }
//   }
// };


module.exports = Park

// Helps found:
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);


// var found = array1.find(function(element) {
//   return element > 10;
// });

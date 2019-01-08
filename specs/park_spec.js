const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
})

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur('Elvis')
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur('Elvis')
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 0);
  });

  // it('should be able to find the dinosaur that attracts the most visitors');
  //
  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});


// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
//
// A park must be able to:
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

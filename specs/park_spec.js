const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let dinoCollection;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('spinosaurus', 'carnivore', 75);
    dino2 = new Dinosaur('brachiosaurus', 'herbivore', 100);
    dino3 = new Dinosaur('avimimus', 'omnivore', 200);
    dino4 = new Dinosaur('brachiosaurus', 'herbivore', 150);
    dino5 = new Dinosaur('allosaurus', 'carnivore', 300);

    dinoCollection = [dino1, dino2, dino3];
    park = new Park('Jurassic Park', 10, dinoCollection);
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
    assert.deepStrictEqual(actual, dinoCollection)
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dino4);
    const actual = park.dinoCollection.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino4);
    park.removeDinosaur(dino3);
    const actual = park.dinoCollection.length;
    assert.deepStrictEqual(actual, 3);
  });

  // xit('should be able to find the dinosaur that attracts the most visitors'), function() {
  // park.dinoCollection;
  // const actual = park.mostVisitedDino(dino4)
  // assert.strictEqual(actual, 'allosaurus')
  // });

  it('should be able to find all dinosaurs of a particular species', function() {
  park.addDinosaur(dino4);
  const actual = park.findDinosaur('brachiosaurus')
  assert.deepStrictEqual(actual, [dino2, dino4])
  });

    it('should be able to remove all dinosaurs of a particular species', function() {
    park.removeSpecies('brachiosaurus');
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1, dino3])
    });

});



// A park must have:
//
// A name - DONE
// A ticket price - DONE
// A collection of dinosaurs - DONE
//
// A park must be able to:
// Add a dinosaur to its collection of dinosaurs - DONE
// Remove a dinosaur from its collection of dinosaurs - DONE
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species - DONE
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Atlantis', 1e6, [], 0);
    dinosaur = new Dinosaur('pterodactyl', 'carnivore', 16)
    dinosaur1 = new Dinosaur('velociraptor', 'herbivore', 45)
    dinosaur2 = new Dinosaur('t-rex', 'omnivore', 40)
    search = 'velociraptor'
    
  })

  it('should have a name', function(){
    const actual = park.park_name;
    assert.strictEqual(actual, 'Atlantis')
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 1e6)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaur_collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add_dinosaur(dinosaur)
    const actual = park.dinosaur_collection.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.remove_dinosaur(dinosaur)
    const actual = park.dinosaur_collection.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add_dinosaur(dinosaur)
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    
    const actual = park.find_best_dino()
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add_dinosaur(dinosaur)
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur1)

    const actual = park.find_dino_search(search)
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.add_dinosaur(dinosaur)
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.visitors_per_day()
    assert.strictEqual(actual, 101)
  });


  it('should be able to calculate the total number of visitors per year', function(){
    park.add_dinosaur(dinosaur)
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.visitors_per_year()
    assert.strictEqual(actual, 36865)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.add_dinosaur(dinosaur)
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.revenue_per_year()
    assert.strictEqual(actual, 36865 * 1e6)
  });


});

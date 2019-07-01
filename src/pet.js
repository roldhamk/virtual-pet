/* eslint-disable no-undef */
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

function Pet(name) {
  (this.name = name),
    (this.age = 0),
    (this.hunger = 0),
    (this.fitness = MAX_FITNESS);
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
  growUp: function() {
    if (!this.isAlive) {
        throw new Error(`${pet.name} is no longer alive :(`);
    }
       this.age += 1,
        this.hunger += 5,
        this.fitness -= 3;
  },
  walk: function() {
    if (!this.isAlive) {
      throw new Error(`${pet.name} is no longer alive :(`);
    } else if (this.fitness + 4 <= MAX_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAX_FITNESS;
    }
  },
  feed: function() {
    if (!this.isAlive) {
      throw new Error(`${pet.name} is no longer alive :(`);
    } else if (this.hunger - 3 >= MIN_HUNGER) {
      this.hunger -= 3;
    } else {
      this.hunger = MIN_HUNGER;
    }
  },
  checkUp: function() {
    if(!this.isAlive) {
        throw new Error(`${pet.name} is no longer alive :()`)
    } else if (this.fitness <= 3) {
        return console.log("I need a walk");
    } else if (this.hunger >= 5) {
        return console.log("I am hungry");
    } else if (this.fitness <= 3 && this.hunger >= 5) {
        return console.log("I am hungry AND I need a walk");
    } else {
        return console.log("I feel great!");
    }
  }
};

module.exports = Pet;

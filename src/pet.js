const MAX_FITNESS = 10;

function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = MAX_FITNESS
};

Pet.prototype = {	
    growUp: function () {	
        this.age += 1;
        this.hunger += 5,
        this.fitness -= 3
    },
    walk: function () {
       if((this.fitness + 4) <= MAX_FITNESS) {
            this.fitness += 4;
       } else {
            this.fitness = MAX_FITNESS;
       }
    }
};

module.exports = Pet;
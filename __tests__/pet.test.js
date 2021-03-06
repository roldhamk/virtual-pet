/* eslint-disable no-undef */
const Pet = require("../src/pet");

beforeEach(() => {
  pet = new Pet("Fido");
});

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("naming pet", () => {
  it("creates a new pet with the given name", () => {
    expect(pet.name).toEqual("Fido");
  });
});

describe("inital age & aging with growUp", () => {
  it("throws an error if the pet is dead", () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow(`${pet.name} is no longer alive :(`);
  });
  it("is 0 years old when created", () => {
    expect(pet.age).toEqual(0);
  });
  it("ages the pet by 1 year", () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});

describe("pet hunger", () => {
  it("initial hunger of the pet is 0", () => {
    expect(pet.hunger).toEqual(0);
  });
  it("hunger increases by 5 when growing up", () => {
    pet.growUp();
    expect(pet.hunger).toEqual(5);
    pet.growUp();
    expect(pet.hunger).toEqual(10);
  });
});

describe("initial fitness and fitness when growing", () => {
  it("initial fitness of the pet is 10", () => {
    expect(pet.fitness).toEqual(10);
  });
  it("fitness decreases by 3 when growing", () => {
    pet.growUp();
    expect(pet.fitness).toEqual(7);
    pet.growUp();
    expect(pet.fitness).toEqual(4);
  });
});

describe("walking the pet", () => {
  it("throws an error if the pet is dead", () => {
    pet.fitness = -1;
    expect(() => pet.walk()).toThrow(`${pet.name} is no longer alive :(`);
  });
  it("fitness level will increase by 4 when walking", () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
    pet.fitness = 6;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it("increases fitness to a maximum of 10", () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feeding the pet", () => {
  it("throws an error if the pet is dead", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow(`${pet.name} is no longer alive :(`);
  });
  it("feeding pet decreases hunger by 3", () => {
    pet.hunger = 8;
    pet.feed();
    expect(pet.hunger).toEqual(5);
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
});

describe("pet check up", () => {
  it("throws an error if the pet is dead", () => {
    pet.fitness = -1;
    pet.hunger = 0;
    expect(() => pet.checkUp()).toThrow(`${pet.name} is no longer alive :()`);
  });
  it("check if pet needs a walk", () => {
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toEqual(console.log("I need a walk"));
  });
  it("check if pet is hungry", () => {
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual(console.log("I am hungry"));
  });
  it("check if pet need a walk and is hungry", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual(console.log("I am hungry AND I need a walk"));
  });
  it("checks that the pet does not need feeding or walking", () => {
    pet.fitness = 4;
    pet.hunger = 1;
    pet.checkUp();
    expect(pet.checkUp()).toEqual(console.log("I feel great!"));
  });
});

describe("pet death", () => {
  it("returns true if pet is alive", () => {
    expect(pet.isAlive).toBe(true);
  });
  it("returns false if pet is dead", () => {
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
});

//the tests below pass, but I'm unsure if I've written the have a baby test and function correct, as it is the same as adopting.

describe("parenting a child", () => {
    it('allows parent to adopt', () => {
        const parent = new Pet('wanda');
        const child = new Pet('cosmo');
        parent.adoptChild(child);
        expect(parent.childen).toEqual(this.children);
    });
    it('allows parent to have a baby', () => {
        const parent = new Pet('wanda');
        const child = new Pet('cosmo');
        parent.haveBaby(child);
        expect(parent.childen).toEqual(this.children);
    });
});

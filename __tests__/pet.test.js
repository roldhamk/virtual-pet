const Pet = require('../src/pet');

beforeEach(() => {
    pet = new Pet('Fido');
});

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    })
  });

describe('naming pet', () => {
    it('creates a new pet with the given name', () => {
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('inital age & aging', () => {
    it('is 0 years old when created', () => {
      expect(pet.age).toEqual(0);
    });
    it('ages the pet by 1 year', () => {
        pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
  describe('initial hunger', () => {
    it('initial hunger of the pet is 0', () => {
         expect(pet.hunger).toEqual(0);
    });
    it('hunger increases by 5 when growing up', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        pet.growUp();
        expect(pet.hunger).toEqual(10);
    });
  });
  describe('initial fitness and fitness when growing', () => {
    it('initial fitness of the pet is 10', () => {
        expect(pet.fitness).toEqual(10);
    });
    it('fitness decreases by 3 when growing', () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
        pet.growUp();
        expect(pet.fitness).toEqual(4);
    })
  });
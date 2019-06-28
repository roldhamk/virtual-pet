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

  describe('inital age', () => {
    it('is 0 years old when created', () => {
      expect(pet.age).toEqual(0);
    });
  });

  describe('increments the age by 1 when called', () => {
    it('ages the pet by 1 year', () => {
        pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
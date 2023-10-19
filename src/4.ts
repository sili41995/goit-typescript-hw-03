class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public tenants: Person[];
  public person: Person;
  public door: boolean;

  constructor(public key: Key) {}

  public comeIn(person): void {
    this.door && this.tenants.push(person);
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(public key: Key) {
    super(key);
  }

  public openDoor(personKey: Key): boolean {
    return personKey.getSignature() === this.key.getSignature() ? true : false;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

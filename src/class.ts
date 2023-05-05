class Key {

    private signature: number; 

    constructor() {
        this.signature = Math.random()
    }
     
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    
    constructor(private key:Key) {
        this.key = key; 
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }

    throw new Error("Door is closed");
  }
  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {

    public openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
           return this.door = true;
        } 
        
        throw new Error("Wrong key");
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);



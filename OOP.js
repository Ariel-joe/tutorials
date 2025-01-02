// class Car {
//     constructor (make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// const car1 = new Car('Honda', 'vezel', 2020);

// Car.prototype.displayInfo = function () {
//     return `this is the ${this.make}, ${this.model},of ${this.year}`
// }

// // console.log(car1.displayInfo(

// Car.prototype.newYear = function (year) {
//     this.year = year;
// }
// console.log(car1.newYear(2024))
// console.log(car1)

class Animal {
  constructor(name, color, habitat) {
    this.name = name;
    this.color = color;
    this.habitat = habitat;
  }

  sleep() {
    return `I am ${this.name}, I sleep during the day`;
  }
  eat() {
    return `I am ${this.name}, I only eat steak`;
  }
  locomote() {
    return `I am ${this.name} and I like strolling`;
  }
}

class Cat extends Animal {
  constructor(name, color, habitat) {
    super(name, color, habitat);
  }

  meow() {
    return `I am ${this.name} and I meow`;
  }
}

class Dog extends Animal {
  constructor(name, color, habitat) {
    super(name, color, habitat);
  }

  bark() {
    return `I am ${this.name} and I bark`;
  }
}

const dogOne = new Dog("bosco", "brown", "ushago");
console.log(dogOne);
console.log(dogOne.bark());
console.log(dogOne.sleep());

const dog2 = new Dog("rex", "black and white", "Westy");
console.log(dog2);

const catOne = new Cat("sly", "black", "Nairobi");
console.log(catOne);

console.log(catOne.meow());
console.log(catOne.sleep());

// Write a Person class in JavaScript that has the properties firstName, lastName, and age. Add a method called getFullName that returns the full name of the person by combining firstName and lastName. Then, create an instance of Person with your own name and age and call the getFullName method to see the output.
class Person {
  constructor(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firsName} ${this.lastName}`;
  }
}

const p1 = new Person("Ariel", "Joe", 24);
console.log(p1.getFullName());

// Create a BankAccount class with a private property #balance. Include methods deposit (to add funds) and getBalance (to check the current balance). The balance should only be accessible via the getBalance method. Test by creating an account, depositing some amount, and checking the balance.
class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `You have deposited ${amount} in your account.`;
    } else {
      return `Deposit amount must be positive.`;
    }
  }

  getBalance() {
    return `Your balance is ${this.#balance}`;
  }
}

const mdosi = new BankAccount(100);
console.log(mdosi.deposit(700));
console.log(mdosi.getBalance());

// Create a Vehicle class with a property type and a method describe that logs a message like "This is a [type]." Now, create a subclass called Car that inherits from Vehicle and adds an additional property model. Update describe in the Car class to include both the type and model. Instantiate a Car and call describe to see the output.

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    return `this is a ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(type, model) {
    super(type);
    this.model = model;
  }

  describe() {
    return `this is a ${this.type} ${this.model}`;
  }
}

const moti = new Car("Volkswagen", "GTI");
const moti2 = new Vehicle("Volkswagen");

console.log(moti2.describe());
console.log(moti.describe());

// Create a Bird class with a method fly that logs "The bird is flying." Now create a Penguin class that extends Bird and overrides the fly method to log "Penguins can't fly." Create instances of both Bird and Penguin and call their fly methods.
class Bird {
  fly() {
    return "the bird is flying";
  }
}

class Penguin extends Bird {
  fly() {
    return "penguins cannot fly";
  }
}

const nyonde = new Bird();
const nyonde1 = new Penguin();

console.log(nyonde.fly());
console.log(nyonde1.fly());

// Simulate an abstract class by creating a Shape class with a method calculateArea that throws an error if called directly. Then, create a Rectangle subclass that extends Shape and implements calculateArea to return the area of the rectangle based on its width and height. Test by creating a Rectangle instance with specific width and height and calling calculateArea.

class Shape { 
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return "error";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const mirabaminne = new Shape(10, 20);
console.log(mirabaminne.calculateArea());

const mirabaminne1 = new Rectangle(10, 20);
console.log(mirabaminne1.calculateArea());

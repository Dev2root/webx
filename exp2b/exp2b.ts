/**
 * Simple TypeScript example demonstrating inheritance and interface
 */

// Define an interface with properties and methods
interface Animal {
    name: string;
    makeSound(): void;
}

// Base class implementing the Animal interface
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(this.name + " says: Woof!");
    }
}

// Derived class extending Dog and adding more functionality
class Labrador extends Dog {
    color: string;

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }

    displayInfo(): void {
        console.log(`Labrador Name: ${this.name}, Color: ${this.color}`);
    }
}

// Usage example
const myDog = new Labrador("Buddy", "Yellow");
myDog.makeSound();    // Output: Buddy says: Woof!
myDog.displayInfo();  // Output: Labrador Name: Buddy, Color: Yellow

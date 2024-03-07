//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Person {
    name: string;
    age: number;
    city: string;
}

let person1: Person = {
    name: "John",
    age: 25,
    city: "New York"
};

let person2: Person = {
    name: "Alice",
    age: 30,
    city: "London"
};

let person3: Person = {
    name: "Bob",
    age: 22,
    city: "Paris"
};

console.log(person1);
console.log(person2);
console.log(person3);
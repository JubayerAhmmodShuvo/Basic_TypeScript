"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.name}, ${this.age}`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
const person = new Person("Jubayer", 25);
console.log(person.getDetails());
const student = new Student("Ahmmod", 20, "A");
console.log(student.getDetails());
console.log(student.getGrade());

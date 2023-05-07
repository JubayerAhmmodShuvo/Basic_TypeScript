"use strict";
class Person {
    constructor(name1, age1) {
        this.name1 = name1;
        this.age1 = age1;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return `${this.name} has a grade of ${this.grade}.`;
    }
}

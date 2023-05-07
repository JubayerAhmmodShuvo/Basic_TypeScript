class Person {
  constructor(private name: string, private age: number) { }

  public getDetails(): string {
    return `${this.name}, ${this.age}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  public getGrade(): string {
    return this.grade;
  }
}

const person = new Person("Alice", 25);
console.log(person.getDetails()); 

const student = new Student("Bob", 20, "A");
console.log(student.getDetails()); 
console.log(student.getGrade());


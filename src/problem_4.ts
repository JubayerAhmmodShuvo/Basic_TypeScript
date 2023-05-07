class Person {
  constructor(private name1: string, private age1: number) { }

  public getDetails(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  public getGrade(): string {
    return `${this.name} has a grade of ${this.grade}.`;
  }
}

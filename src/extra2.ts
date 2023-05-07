type StringOrNumber<T> = T extends string ? string : number;

interface Person {
  name: string;
  age: StringOrNumber<any>;
}

const person: Person = {
  name: "John",
  age: 30
};

console.log(person); 

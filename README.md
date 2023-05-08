# First_Assignment_Started

## Questions & Answers

### What is TypeScript, and how is it different from JavaScript?

#### Ans:
Typescript is a superset of JavaScipt which allows to add syntax for types.It allows us to add static types, interface, class and so many other options of javaScript. It is different from JavaScript because JavaScript is a loosely typed language so that it is difficult to understand what type of data is passing. With typeScript we can specify the types of the data and for that we got the type related error before the runtime. There are some features like class, interface, that make the typescript easier to write industry level applications.


### Can you explain the difference between "interface" and "type" in TypeScript?

#### Ans:
Interface and type seem to be similar but there is many differences. Interface defines the shape of an object,including its property and types. Interface mainly used to describe the structure of an object. We define interface with keyword interface. 
Types can refer to any data types, including object types, union types , primitive types, intersection types, tuple types or any different types. Types are to describe the wider range of types. Type keyword used to declare the types.

### Can you give an example of how to use generics in TypeScript?

#### Ans:
Generics in TypeScript allows us to write reusable code that can work with a variety of types.
```
  function startLine<T>(arg: T): T {
  return arg;
}

const myString = startLine<string>("Hello, How are you? ");
const myNumber = startLine<number>(1002);
```

### What is the difference between an "unknown" and "any" type in TypeScript?

#### Ans:

The type any has less restruction in typescript. We can call it a escape hatch of a typescript type system. By declaring a variable with any we can assign any value to the variable. Then the compiler allow us to perform any kind of operation without checking it's type.

On the other hand the type unknown has more restruction than any type. The unknow type is simple but sometimes its more tricky. When we declare a variable with unknown the compiler won't perform any kind of operation with out chekcing its type. It provides more type safety than any type. 

### Can you give an example of how to use enums in TypeScript?

#### Ans:
```
enum RollNumber {
  Jubayer=1,
  Ahmmod=2,
  Shuvo=3
}

const FirstBoy = RollNumber.Jubayer;
console.log(FirstBoy);

```


### What is the "as" keyword used for in TypeScript?

#### Ans:

### Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

#### Ans:

## Extra Questions & Answers

### Can you explain what a "tuple" is in TypeScript?

### Can you give an example of how to use "readonly" properties in TypeScript?

### Can you give an example of how to use "conditional types" in TypeScript?


interface Person {
  name: string;
  age: number;
}

function filterByAge(arr: Person[]): Person[] {
  return arr.filter((person) => person.age >= 18);
}

const persons: Person[] = [
  { name: 'Jubayer', age: 25 },
  { name: 'Ahmmod', age: 17 },
  { name: 'Shuvo', age: 21 },
  { name: 'Nayem', age: 16 },
];

const adults = filterByAge(persons);
console.log(adults); 

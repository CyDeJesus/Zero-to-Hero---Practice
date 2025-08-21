const test = 123; //not changeable
let test2 = 1234; //changeable
var test3 = 12345; //changeable

console.log("test", test);
console.log("test2", test2);
console.log("test3", test3);

// test = 321; - cant be change since its const
test2 = 4321;
test3 = 54321;

// console.log("test", test);
console.log("test2", test2);
console.log("test3", test3);

// data types
console.log(123); //num
console.log("hello world"); //string
console.log(true); //boolean
console.log([1, 2, 3, 4, 5, "six"]); //arrays
console.log({
  name: "Jasmin",
  age: 21,
}); // object (key value pair)

//functions
function testFunction() {
  console.log("testFunction");
}
testFunction();

const testFunction2 = function () {
  console.log("testFunction2");
};

testFunction2();

const testFunction3 = () => {
  console.log("testFunction3");
};
testFunction3(); // can't get (this: object (property of object))

const data = {
  name: "Jasmin",
  hello: function () {
    console.log("Hello", this.name);
  },
};

data.hello();

// Arrays
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);

// Objects

const person = {
  name: "Jasmin",
  age: 21,
  address: {
    city: "Tarlac City",
    province: "Tarlac",
  },
  skills: ["HTML", "CSS", "JS"],
};

console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.address.city);
console.log(person.address.province);
console.log(person.skills);
console.log(person.skills[2]);

// Conditions

const age = 18;

if (age >= 18) {
  console.log("Approved");
} else {
  console.log("Denied");
}

switch (age) {
  case 18:
    console.log("Approved");
    break;
  case 20:
    console.log("Go");
    break;
  default:
    console.log("Denied");
    break;
}

// Loops

// for loop
for (let i = 0; i < 10; i++) {
  console.log("for loop", i);
}

// for in (for each)
const animals = ["cat", "dog", "bird"];

for (let i in animals) {
  console.log("animals", animals[i]);
}

// for of

for (const animal of animals) {
  console.log(`animals are ${animals}`);
}

// fetch (basic way to call API)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response) => Response.json())
  .then((json) => console.log(json));

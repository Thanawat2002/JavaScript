const people = ["Aarion", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    fistname: "Anirach",
    lastnamne: "Mingkhwan",
};

function sayHello(person) {
    console.log("Hello, " + person.fistname + " " + employee.lastnamne);
};

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);
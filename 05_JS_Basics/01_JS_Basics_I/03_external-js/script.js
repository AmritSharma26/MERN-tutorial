console.log("This is Exterenal Javascript");

// Variable

let num = 10;
num = 20;
console.log(num);

const constNum = 12;
// constNum = 24; // Error
console.log(constNum);

{
    let localNum = 33;
}
// console.log(localNum); // Error

{
    var globalNum = 33;
}
console.log(globalNum);

// Dynamic Typing

let item = 25;
console.log(item);
item = "Paneer";
console.log(item);

// Reference Type

// Objects
let person = {
    firstName: "Amrit",
    lastName: "Sharma",
    age: 24,
};
console.log(typeof person);
console.log(person);
console.log("Age: ", person.age);
console.log("First Name : ", person["firstName"]);

// Arays

let names = ["Amrit", "Ujjwal", "Vikas"];
console.log(typeof names);
console.log(names);
console.log(names[1]);

// Functions

let printName = function (name) {
    console.log(name);
};
printName("Amrit");
console.log(typeof printName("Amrit"));
console.log(printName("Amrit"));

//Operators

// Arithmatic

console.log("10 + 2 ", 10 + 2);
console.log("10 - 2 ", 10 - 2);
console.log("10 / 2 ", 10 / 2);
console.log("10 * 2 ", 10 * 2);
console.log("10 % 3 ", 10 % 3);
console.log("10 ** 3 ", 10 ** 3);

let num1 = 24;
console.log("Number is 24");
console.log("++Num : ", ++num1);
console.log("--Num : ", --num1);
console.log("Num++ : ", num1++);
console.log("Num-- : ", num1--);
console.log("Num : ", num1);

// Assignment
// =, +=, -=, *=, /=, %=

// Comparition

console.log('10 == "10"', 10 == "10"); // loose Equality
console.log(" 10 === '10'", 10 === "10"); // Strict Equality
console.log(" 10 !== '10'", 10 !== "10");

console.log(" 10 > 5", 10 > 5);
console.log(" 10 < 5", 10 < 5);

// Ternary Operator
let age = 15;
let status = age >= 18 ? "Can Vote" : "Can't vote";
console.log(status);

// Bitwise Operator

console.log("2 & 3", 2 & 3);
console.log("2 | 3)", 2 | 3);
console.log("~5", ~5); // ~n === -(n + 1)
console.log("3 ^ 5", 3 ^ 5); // 0011 ^ 0101 = 0110 = 6
console.log("5 >> 1", 5 >> 1);
console.log("5 << 1", 5 << 1);

// Logical Operator

console.log("true && false", true && false);
console.log("true || false", true || false);
console.log("!false", !false);

//Logiacl Short-circuit
console.log(
    'false || 2 === "2" || "Amrit"',
    Boolean(false || 2 === "2" || "Amrit")
); //truthy
console.log('Boolean(true && "2" == 2 && 0)', Boolean(true && "2" == 2 && 0)); //falsy

//opeartor Precendece

console.log((2 + 4 + (4 * 2) / 8) << 1);

// Control Staement

// if-elseif-else

let marks = 98;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else if (marks >= 60) {
    console.log("D");
} else {
    console.log("E");
}

// Switch

let count = 2;

switch (count) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
}

// loops

// for loop

let arr = [];
for (let i = 1; i < 6; i++) {
    arr.push(i);
}
console.log(arr);

//while loop

let x = 6;
while (x <= 10) {
    arr.push(x);
    x++;
}
console.log(arr);

// do-while loop

do {
    arr.push(x);
    x++;
} while (x <= 15);
console.log(arr);

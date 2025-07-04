run(); // hoisting

function run() {
    console.log("running");
}
run();

// Function Assgnment - No hoisting
// Named
let walk = function walking() {
    console.log("walking");
};

// Anonymous
let walk2 = function () {
    console.log("Walking Again");
};

walk();
walk2();

let move = walk;
move();

// Dynamic pararmeters

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
console.log(sum("a", "b"));
console.log(sum(1)); // NAN
console.log(sum(1, 2, 3));

// argument object

let sum2 = function (a, b) {
    console.log(arguments);
    return a + b;
};

let ans = sum2(1, 2, 3, 4, 5);

let dynamicSum = function () {
    let total = 0;
    for (let val of arguments) {
        total += val;
    }
    return total;
};

console.log(dynamicSum(1, 2, 3, 4, 5));

// Rest operator (...) - last formal parameter

let sumRest = function (num1, num2, ...args) {
    console.log(args);
};

sumRest(10, 20, 30, 40, 50);

// Default Parameters

function interest(p, r = 6, y = 10) {
    return (p * r * y) / 100;
}

console.log(interest(1000, 10, 5));
console.log(interest(1000, 8));
console.log(interest(1000));
console.log(interest(1000, undefined, 8)); // bad practice / hack

// Getter and setter

let person = {
    firstName: "Amrit",
    lastName: "Sharma",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== "string") {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};
console.log(person.fullName);

// Error Handling - Try and Catch

try {
    person.fullName = undefined;
} catch (e) {
    // alert("You have sent a number in fullName");
    alert(e);
}

// Scopes

// global scope

let x = 10;
console.log(x); // 10

//  Function scope

function greet() {
    let message = "Hello";
    console.log(message); // "Hello"
}
greet();
// console.log(message); Error: message is not defined

// Block scope

if (true) {
    let abx = 5;
}
// console.log(abx); Error

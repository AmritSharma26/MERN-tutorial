let arr = [1, 4, 5, 7];
console.log(arr);

// Insertion

//End -> push
arr.push(9);
console.log(arr);

//Begin -> unshift
arr.unshift(8);
console.log(arr);

//middle -> splice(idx, delete, insert)
arr.splice(2, 0, "a", "b", "c", "d");
console.log(arr);

// Searching

let arr2 = [1, 4, 5, 7];
console.log(arr2);

// indexOf
console.log(arr2.indexOf(4));
console.log(arr2.indexOf(4, 2)); // (num, startIdx)

// present of not -> indcludes
console.log(arr2.includes(7));

let courses = [
    { no: 1, name: "Eng" },
    { no: 2, name: "Math" },
];
console.log(courses);
// console.log(courses.indexOf({ no: 1, name: "Eng" })); // diff reference

// Need to use find method takes a callback function

let course = courses.find(function (course) {
    return course.name == "Eng";
});
console.log(course);

// Arrow Function / predicate function (ret true or false)

let course2 = courses.find((course) => course.name === "Math");
console.log(course2);

// Removing Element
let numbers = [1, 2, 3, 4, 5, 6, 7];

// end pop()
numbers.pop();
console.log(numbers);

// begin shift()
numbers.shift();
console.log(numbers);

// middle splice(index, no of elem remover)
numbers.splice(2, 1);
console.log(numbers);

// Emptying an Array

// loop pop()

// numbers = []
let numbers2 = numbers;
numbers = [];
console.log("numbers is empty :", numbers);
console.log("but number2 still have :", numbers2);

// numbers.length = 0
numbers = [1, 2, 3, 4, 5, 6, 7];
numbers2 = numbers;

numbers.length = 0;
console.log("both are empty by len 0", numbers);
console.log("both are empty by len 0", numbers2);

// Splice
numbers = [1, 2, 3, 4, 5, 6, 7];
numbers2 = numbers;

numbers.splice(0);
console.log("both are empty by splice", numbers);
console.log("both are empty by splice", numbers2);

// Combining and Slicing Arrays

let first = [1, 2, 3];
let second = [4, 5, 6];

// .concat
let combined = first.concat(second);
console.log(first);
console.log(second);
console.log(combined);

//.slice(startidx, endidx)
let sliced = combined.slice(0, 3);
console.log(sliced);

// Combining array of objects

let users = [
    { name: "John", age: 30 },
    { name: "Anna", age: 25 },
    { name: "Mike", age: 28 },
];
let patrons = [
    { name: "ujjwal", age: 23 },
    { name: "vikas", age: 28 },
];
console.log(users);
console.log(patrons);
let members = users.concat(patrons);
console.log(members);
console.log([...users, ...patrons]);

// Slicing array of objects

console.log(members.slice(1, 4));

//copying using slice
numbers = [1, 2, 3, 4, 5, 6];
let numbersCopy = numbers.slice();

numbers.push("pushed");
console.log(numbers);
console.log(numbersCopy);

// spread operator

let combined2 = [...first, false, ...second, true];
console.log("combined using spread operator", combined2);

// copying using spread

let numbersCopy2 = [...numbers];
console.log("cpied using spread :", numbersCopy2);

// Iteration an Array

let array = [10, 20, 30, 40, 50];

// for-of loop
console.log("Using for-of loop");
for (let elem of array) {
    console.log(elem);
}

// for-each loop
console.log("Using for-each loop");
array.forEach((elem) => console.log(elem));

// Joining Array

const joined = numbers.join("-");
console.log(joined);

// splitting Array

let message = "This is my first message";
let splitMessage = message.split(" ");
console.log(splitMessage);
let joinedMessage = splitMessage.join("-");
console.log(joinedMessage);

// Sorting Array , sort() converts into string

numbers = [4, 50, 1, 5, 20];
numbers.sort((a, b) => a - b); // a-b  -> swap, else not
console.log(numbers);
numbers.reverse();
console.log(numbers);

// Sorting Array of Objects

console.log(members);

console.log([...members].sort((a, b) => a.age - b.age));
console.log([...members].sort((a, b) => a.name.localeCompare(b.name)));

console.log(
    [...members].sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        else return 0;
    })
);

// Filtering Arrays

numbers = [1, 2, -1, -12];
let filtered = numbers.filter(function (value) {
    return value >= 0;
});
console.log(filtered);

// Mapping Array : map each elem of array

let nums = [7, 8, 9, 10];
// let items = nums.map((val) => `Student Number ${val}`);
let items = nums.map((val) => {
    return { value: val };
});

console.log(items);

//chainning

nums = [7, 8, -9, -10];

items = nums.filter((val) => val >= 0).map((val) => ({ value: val }));
console.log(items);

// reduce arrays

let a = [1, 2, 3, 4];
// let total = 0;
// for (let val of a) {
//     total += val;
// }
// console.log(total);

let total = a.reduce((acc, currVal) => {
    return acc + currVal;
}, 0);
console.log(total);

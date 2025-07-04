// Inbuild Objects

// Math

console.log(Math.random());
console.log(Math.PI);
console.log(Math.abs(-5 - 5 + 2));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.trunc(4.9));
console.log(Math.max(1, 9, 3));
console.log(Math.min(1, 9, 3));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(144));

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

// String

let str1 = "Amazing Car   "; // similar to String('Amrit')
let str2 = new String("Super");
// ✅ Use primitive strings ("...", '...', `...`) — they are fast and safe
// ❌ Avoid new String() unless you specifically need a String object (very rare)

// Auto-Boxing (Temporary Object Wrapping) BTS
console.log(str1, typeof str1);
console.log(str2, typeof str2);

console.log(str1);
console.log(str1[2]);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toUpperCase());
console.log(str1.indexOf("i"));
console.log(str1.slice(2, 4));

console.log(str1.replace("A", "Tu"));
console.log(str1.includes("zi"));
console.log(str1.split(" "));
console.log(str1.split(" "));
console.log(str1.trim());

console.log(str1.startsWith("Ama"));
console.log(str1.endsWith("ar"));

// Escape Notation

console.log("Hello , ' , \" , \n new \tline, \\");

// Template Literal
let x = 74;
console.log(`this is templage literal
    this is in next line
    value of x is ${x}`);

// Date Object

let date1 = new Date();
console.log(date1);
let date2 = new Date("26 march 2002");
console.log(date2);
let date3 = new Date(2002, 2, 26, 2);
console.log(date3);

date3.setFullYear(1947);
console.log(date3);

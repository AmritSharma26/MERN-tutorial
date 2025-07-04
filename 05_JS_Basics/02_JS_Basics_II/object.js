// object rectangle
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function () {
        console.log("draw rectangle");
    },
};

console.log(rectangle);
console.log(rectangle.length);
console.log(rectangle.draw);
console.log(rectangle.draw()); // method not ret anything therfore also prints undefined

// OOPs : programming paradigm uses objects

// factory function

function createRectangle(length, breadth) {
    // Parameters
    return (rectangle = {
        length: length,
        breadth: breadth,
        draw: function () {
            console.log("drawing rectangele");
        },
    });
}

let rectangeleObj1 = createRectangle(5, 4);
console.log(rectangeleObj1);
rectangeleObj1.draw();

// Constructor Function

function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log("drawing rectangle by construcotr's Object");
    };
}
let rectangeleObj2 = new Rectangle();
console.log(rectangeleObj2);
rectangeleObj2.draw();

// dynamic Natuer of Objects

rectangeleObj2.color = "yellow";
console.log(rectangeleObj2);

delete rectangeleObj2.color;
console.log(rectangeleObj2);

console.log(rectangeleObj2.constructor);
console.log(rectangeleObj1.constructor);
console.log(Rectangle.constructor);

// Primitive data type behavior : pass value

let a = 10;
let b = 10;
a++;
console.log(a);
console.log(b);

let c = 50;
function inc(c) {
    return ++c;
}
inc(c);
console.log("value of c after inc(c)", c);

// reference data type behavior : pass reference

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value++;
console.log(obj1.value);
console.log(obj2.value);

let obj3 = { value: 50 };
function incVal(c) {
    return ++c.value;
}
incVal(obj3);
console.log(obj3.value);

// Iteration through object

for (let key in rectangeleObj2) {
    console.log(key, rectangeleObj2[key]);
}

for (let key of Object.keys(rectangeleObj2)) {
    console.log(key, rectangeleObj2[key]);
}

if ("length" in rectangeleObj2) {
    console.log("There's a length property in rectangle");
}

// Cloneing Objects

let obj4 = {
    a: 10,
    b: 20,
    c: 30,
};

// Iteration

let obj5 = {};
for (let key in obj4) {
    obj5[key] = obj4[key];
}
console.log("obj4 :", obj4);
console.log("obj5 :", obj5);

// Assign

let obj6 = Object.assign({}, obj4, obj1);
console.log("obj6 :", obj6);

// Spread
let obj7 = { ...obj4 };
console.log("obj7 :", obj7);

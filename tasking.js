//simple variable declaration
let a = 2;
let b = 3;

let
    sum = a + b;

console.log("basic variable declaration\n", sum);


//differentiating between var let and const 

for (var index = 0; index < 6; index++) {
    setTimeout(() => console.log("difference between variables in js\n", index), 0);

}


for (let index = 0; index < 6; index++) {
    setTimeout(() => console.log("difference between variables in js\n", index), 0);

}

/**we can not reinitialize a const varible in a loop that is why it will 
give a error everytime we run this*/


function total(a, b) {
    return console.log("Function declaration and implementation\n", a + b);
}


total(3, 4);

//objects in js 

let person = {
    name: "Zargham",
    age: 24,
    gender: "Male",
    address: {
        city: "Lahore",
        society: "New Lahore City",
        street: "Street 1",
    },
    degreeProgram: "BS Software Engineering"
}

console.log(person);

function language() {
    let country = "Pakistan",
        province = "Punjab",
        linguistics = {
            area: {
                north: "Saraiki",
                south: "Sindhi",
                east: "Punjabi"
            }
        }
    return {
        country, province, linguistics
    };
}

let { country, province, linguistics } = language();
console.log(country, province, linguistics);

/**if-else switch statement  */

const number = 1;
if (number < 2) {
    console.log("the number is ", number)
}
else {
    console.log("the number is not ", number);
}

let bird = "sparrow"
switch (bird) {
    case "pegion":
        console.log("the test gives the wrong bird");
        break;
    case "sparrow":
        console.log("the test gives the correct bird");
        break;
    default:
        break;
}

/**loops other then for loop  */

let j = 3;

while (j <= 4) {
    console.log(j);
    if (j === 4) {
        break;
    }
    j++;
}

let num1 = 5;
let num2 = 9;

let total1 = num1 + num2;

do {
    console.log("do while loop testing", total1);
    total1++;
    if (total1 === 17) {
        break;
    }
} while (total1 <= 20);

/**continue */

let check = 3;
let final = 10;
for (let i = 0; i < final; i++) {
    if (check === 3) continue;
    console.log("continue", i);
}
/** continue skips the next iterative that is of console.log it skips that line of code and returns to the increment part on the code  */

/**try catch and using finall */

try {
    console.log("try catch and finally")
} catch (error) {
    console.log("error", error);
} finally {
    console.log("finally block is executed");
}

/**for-in loop */

let array = [1, 2, 3, 4, 5, 6, 7];

for (const value in array) {
    console.log(array[value])
}

/**operators */
let h = 4;
let g = 1;

console.log("A & B = " + (h & g));
console.log("A | B = " + (h | g));
console.log("~A = " + (~h));

let c = 6;
let v = 1;

console.log("A & B = " + (c & v));

console.log("A | B = " + (c | v));

console.log("~A = " + (~c));

console.log("A >> B = " + (c >> v));

console.log("A >>> B = " + (c >>> v));

console.log("A << B = " + (c << v));

/**ternary operators */

let test1 = "Zargham";
let test2 = "Ahmed";

let result = (test1 === "Shaukat") ? test1 : test2
console.log("tERNARY OPERATORS", result);

/**Date in js */

let date = new Date();

let year = date.getFullYear().toString().slice(-2);
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours = date.getHours() % 12 || 12;
let minutes = String(date.getMinutes()).padStart(2, '0');
let ampm = date.getHours() >= 12 ? 'PM' : 'AM';

console.log(`Date: ${year}/${month}/${day} Time: ${hours}:${minutes} ${ampm}`);

/**JSON Parsing in js  */

let car = '{"model":[' +
    '{"carName":"Baleno","brandName":"Maruti", "color":"Red", "year":2020 },' +
    '{"carName":"Aura","brandName":"Hyundai", "color":"Blue", "year":2021 },' +
    '{"carName":"Nexon","brandName":"Tata", "color":"White", "year":2022 }]}';

const cars = JSON.parse(car);
console.log("The Name of the car is: " + cars.model[2].carName + "color of the car is:" + cars.model[2].color + "and the year last used is:" + cars.model[2].year);

/**Map in js */

let map1 = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]);

console.log(map1)

let map2 = new Map([
    ["Name", "Zargham"],
    ["New Name", "Ahmed"],
    ["Name Updated", "Amad"],
    ["Recent Name", "Hamza"]
]);

console.log(map2)

let map3 = new Map();
map3.set("Name", "Zargham");
map3.set("new name", "Yousuf");
map3.set("updated name", "Ahmed");

console.log(map3);

/**Set in js */
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.add(7);

console.log(mySet);


console.log(mySet.has(2));
console.log(mySet.has(10));

mySet.delete(2);
console.log(mySet);

console.log(mySet.size);

mySet.forEach(value => {
    console.log(value);
});



let myArray = Array.from(mySet);
console.log(myArray);


/**Promises, reject , resolve */

let newPromise = new Promise(function (resolve, reject) {
    let y = "zargham";
    let z = "zargham";

    if (y == z) {
        resolve();
    } else {
        reject();
    }
});
newPromise.then(function () {
    console.log("It works and i know it");
}).catch(function () {
    console.log("It does not work");
})

/**Proxy in js*/

let details = {
    name: "zargham",
    age: 25,
    gender: "male"
}

const prox = new Proxy(details, {
    get: function (target, prop) {
        if (prop === 'gender') {
            return "unauthorized"
        } else if (prop in target) {
            return target[prop];
        }
    }
});
console.log(prox.name);
console.log(prox.age);
console.log(prox.gender);

/**
 * among the three elements in the object of details we are only giving access 
 * of display to only 2 of them rest are being displayed 
 */

/**Deletion in proxy */

let detail = {
    name: "Ahmed",
    age: 25,
    gender: "male",
    skill: "development"
}

const handler = {
    deleteProperty(target, prop) {
        if (prop in target) {
            delete target[prop]
            console.log(`Removed: ${prop}`);
        }
    }
};

const proxy = new Proxy(detail, handler);

console.log("This is going to be deleted:", proxy.gender);
delete proxy.gender;
console.log(proxy.gender);

/**function calls */

function sampleFunction(a, s) {

    return a + s;
}

let resultant = sampleFunction.call(this, 2, 3);
console.log(resultant);
//below refers to calling a function defined in an object 
let employee = {
    empDetails: function (designation, experience) {
        return "The name of employee: " + this.name
            + " \n"
            + "ID:"
            + this.id
            + "\nDesignation:"
            + designation
            + "\nExperience:"
            + experience
    }
}

let emp1 = {
    name: "Zargham",
    id: "212"
}

let emp2 = {
    name: " Ahmed ",
    id: " 121 "
}

let post = employee.empDetails.call(emp1, " intern ", " 2 years ")

console.log(post);

let object = {
    firstName: "Zargham",
    lastName: "Shaukat",
    age: 24

}

/**Anonymous Function */
//there is no name for the defined function that is why it is an anonymous function
let func = function (parameter1) {
    return (

        console.log("Hello " + parameter1)
    )
}

func("zargham");

/**Nested Function */

function test5(a) {
    function test3(b) {
        return a + b
    }
    return test3;
}

function checkNest() {
    console.log(test5("test it if this works")
        (" \nit really works"))
}

checkNest();

/**Async Function */

const checkData = async () => {
    let text = await "asynchrounous function";
    return console.log(text)
}

console.log("Testing which outputs first");

console.log("another test");

checkData();
console.log("final test");

/**the resultant output of asynchronous function will let the other outputs to 
 * execute and then execute its resultants */

/**Regex in js (regex = regular expressions) */

function myFunction() {
    let str = "Hello, World!";
    //i used here is a modifier
    let txt = str.replace(/world/i, "Zargham");
    console.log(txt);

}

myFunction();


// // Question#1
// console.log("Hey Sheikh Talha, I have started learning TYPESCRIPT.");

// // Question#2
// var name1: string = "Talha Zahid";
// console.log(name1);

// // Question#3
// var n1: number = 1;
// var n2: number = 2;
// var n3: number = 3;
// var n4: number = 4;
// var n5: number = 5;
// var n6: number = 6;
// var n7: number = 7;
// var n8: number = 8;
// var n9: number = 9;
// var n10: number = 10;

// // SUM
// var sum = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
// console.log(sum);

// // Subtraction
// var diff = n1 - n2 - n3 - n4 - n5 + n6 - n7 + n8 - n9 - n10;
// console.log(diff);

// // Product
// var mult = n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10;
// console.log(mult);

// // Queston4
// var num1: number = 27;
// var num2: number = 5;
// var div: number = num1 / num2;
// console.log(div);

// // Question5
// var order: number = n10 + n9 / n4 * n3 - n7; //It will follow BODMAS
// console.log(order); 


// ------------------------------------------------------------------

// Class PQ 
let lngth: number = 9;
let height: number = 5;
let width: number = 7;
let num: number = 4;
let age: number = 4;

// Task1
let rectangle: number = lngth * width;
console.log("Area of rectangle is ", rectangle);

// Task2
let volume: number = height * lngth * width;
console.log("Area of rectangle is ", volume);

// Task3 
if (num > 0) {
    console.log(`${num} is Positive`);

}
else if (num == 0) {
    console.log(`${num} is Zero`);
}
else {
    console.log(`${num} is Negative`);
}

// Task4 
if (num % 2 == 0) {
    console.log(`${num} is Even`);
}
else {
    console.log(`${num} is Odd`);
}

// Task5
if (age > 18) {
    console.log("Person is eligible to vote");
}
else {
    console.log(`Person is not eligible to vote`);
}

// Task6

let result: number = (((10 + 5) * 3 - 2) / (4 % 3) - 7);
console.log(`Result of expression is ${result}`);

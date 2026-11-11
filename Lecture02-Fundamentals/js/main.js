// document.write(a * b)
// console.log(a * b) // Debugging
// console.warn("Hello") // 
// console.error()
// console.info() // Information

// var, let, const => Keyword ( built in )
var meraNaam = "Moiz";
// Concatenation => Strings
document.write("Name: ", meraNaam, "<br>");

let meriAge = 22;
document.write("Age: ", meriAge, "<br>")

const isVerified = true; 
document.write("Is Verfied: ", isVerified, "<br>");

console.log(typeof meraNaam);
console.log(typeof meriAge);
console.log(typeof isVerified);

let name; 
console.log(typeof name)

let age = null;
console.log(typeof null);

// JSON Object
const student = {
    name: "Madiha", 
    age: 199, 
    email: "madiha@gmail.com",
    phone: "0332151256"   
}

console.log(typeof student);

var students = ["Adyan", "Hussain", "Mustufa", "Moiz", "Almas", "Madiha"];
console.log(Array.isArray(students));

let firstName = "Abdul";
let lastName = "Moiz";

document.write(firstName + " " + lastName + "<br>");

var myName = "Adyan";
var myAge = 22;
var course = "ADSE";
var marks = 78;
var myClass = "Lab 3";

// document.write("Name: ", myName, "<br>Age: ", myAge, "<br>Course: ", course, "<br>Marks: ", marks, "<br>Class: ", myClass);
document.write(`Name: ${myName} \nAge: ${myAge} \nCourse: ${course} \nMarks: ${marks} \nClass: ${myClass} <br>`);

var numOne = 5; 
var numTwo = 6;

console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);
console.log(numOne / numTwo);
console.log(numOne ** numTwo);

// Remainder
var num = 2002; 
if (num % 4 === 0) {
    document.write("Leap Year")
}else {
    document.write("Not a leap year");
}
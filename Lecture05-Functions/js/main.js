// Function Declare
function greet() {
  document.write("Welcome to our website <br>");
}

// Calling
greet();

function khushamdeed(apkaNaam) {
  document.write(`Khush Amdeed ${apkaNaam} <br>`);
}

khushamdeed("Adyan");
khushamdeed("Mustufa");

// function addition(a, b) {
//     document.write(a + b, "<br>");
// }

// addition(2, 19);

// function sub(a, b) {
//     document.write(a - b, "<br>");
// }

// sub(4,2);

// // Function Expression
// var multiply = function(a, b) {
//     return a * b;
// }

// // Calling
// var res = multiply(5, 6) + 10;
// document.write(res + "<br>");

// // Arrow Functions
// var divide = (a, b) => {
//     if (b === 0) {
//         return "Cannot divided by zero";
//     }
//     return a / b;
// }

// // Calling
// var result = divide(5,2);
// document.write(result + "<br>")

// Strict Comparison
var numOne = 5;

if (numOne === "5") {
  document.write("TRUE");
} else {
  document.write("FALSE");
}

document.write("<br>")

// Basic Calculator
var numOne = parseFloat(prompt("Enter value one: "));
var operator = prompt("Enter any operator (+, -, *, /): ");
var numTwo = parseFloat(prompt("Enter value two: "));

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return "Cannot divided by zero";
  }
  return a / b;
}

var res;

switch (operator) {
  case "+":
    res = add(numOne, numTwo);
    break;

  case "-":
    res = sub(numOne, numTwo);
    break;

  case "*":
    res = mul(numOne, numTwo);
    break;

  case "/":
    res = div(numOne, numTwo);
    break;

  default:
    res = "Invalid operator";
    break;
}

document.write(`Answer: ${res}`);
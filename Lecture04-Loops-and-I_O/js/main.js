// For loop
for (var i = 1; i <= 5; i++) {
    document.write("For Loop: " + i + "<br>");
}

// while loop
document.write("<br>");
var a = 1;

while (a <= 5) {
    document.write("Madiha <br>");
    a++;
}


// do while loop
document.write("<br>");
var b = 10;


do {
    document.write("Zainab <br>");
    b++;
} while (b <= 5);


// nested loops
for (var i = 1; i <= 5; i++) {
    document.write(i);
    for (var a = 1; a <= 3; a++) {
        document.write(a);
    }
    document.write("<br>");
}

// I/O
var name = prompt("Enter your name: ");
document.write("Name: ", name, "<br>");

var numOne = parseFloat(prompt("Enter value one: "));
var opr = prompt("Enter operator (+, -, *, /): ");
var numTwo = parseFloat(prompt("Enter value two: "));
document.write("Addition: ", numOne + numTwo)
var name = "  abdul moiz khan   ";

// Length
document.write(name.length + "<br>");
// Trim
document.write(name.trim() + "<br>");
// UpperCase 
document.write(name.toUpperCase() + "<br>");
// LowerCase
document.write(name.toLowerCase() + "<br>");
// Includes
document.write(name.includes("moiz") + "<br>")
// IndexOf
document.write(name.indexOf("moiz") + "<br>")
// Slice
document.write(name.slice(2, 12) + "<br>")
// Replace
document.write(name.replace("moiz", "basit") + "<br>");

var student = "Moiz";

document.write(student.repeat(3) + "<br>");

var fullName = "Abdul Moiz Khan";
var words = fullName.split(" ");

document.write(words + "<br>");
console.log(words);
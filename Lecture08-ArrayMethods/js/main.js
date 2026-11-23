var students = ["Madiha", "Zainab", "Moiz"];

// Push Method
students.push("Adyan");
document.write(students + "<br>");

// Pop Method
students.pop();
document.write(students + "<br>");

// Unshift Method
students.unshift("Adyan");
document.write(students + "<br>");

// Shift Method
students.shift();
document.write(students + "<br>");

// Includes Method
document.write(students.includes("Moiz") + "<br>");
document.write(students.includes("Adyan") + "<br>");

// IndexOf
document.write(students.indexOf("Moiz") + "<br>");
document.write(students.indexOf("Arbab") + "<br>");

var newStudents = [
  "Adyan",
  "Mustafa",
  "Fahad",
  "Abdul Basit",
  "Ahmed",
  "Moiz",
  "Zainab",
  "Madiha",
];

// Foreach
newStudents.forEach(function (s, i) {
  document.write(`${i + 1}. ${s} <br>`);
});

var numbers = [2, 4, 6, 8];

// Map Method
var results = numbers.map(function (num) {
  return num * 2;
});

document.write(results + "<br>");

// Filter
var marks = [25, 45, 99, 100, 11];

var passed = marks.filter(function (mark) {
  return mark >= 40;
});

document.write(passed + "<br>");

// Find Method
var result = marks.find(function (mark) {
  return mark >= 40;
});

document.write(result + "<br>");

var nums = [99, 44, 100, 55, 9, 2];

// sort and reverse
nums.sort(function (a, b) {
  return a - b;
});

document.write(nums + "<br>");

nums.reverse();

document.write(nums + "<br>");
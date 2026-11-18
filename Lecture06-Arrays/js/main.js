var students = ["Arbab", "Abdul Moiz", "Adyan", "Mustafa", "Abdul Basit", "Almas", "Zainab", "Madiha", "Fahad", "Irfan"];
var rollNo = [5001, 5002, 5003, 5004, 5005, 5006];

document.write(students[2] + "<br>");
document.write(rollNo[2] + "<br>");

document.write("Students Array Length: ", students.length + "<br>")
document.write("RollNo Array Length: ", rollNo.length + "<br>")

// for (var i = 0; i < students.length; i++) {
//     document.write(students[i] + "<br>")
// }

students.forEach(student => {
    document.write(student + "<br>");
});
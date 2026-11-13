// Marksheet
var name = "Madiha";
var sub1 = 72;
var sub2 = 78;
var sub3 = 79;

var obtained = sub1 + sub2 + sub3;
var totalMarks = 300;
var per = (obtained / totalMarks) * 100;
var result = "";


if (per >= 40) {
    result = "Pass";
}else {
    result = "Fail"
}

// Grading System
// Ladder If Else
var grade = "";
if (per >= 80) {
    grade = "A+";
}else if (per >= 70 && per < 80) {
    grade = "A";
}else if (per >= 60 && per < 70) {
    grade = "B";
}else if (per >= 50 && per < 60) {
    grade = "C";
}else if (per >= 40 && per < 50) {
    grade = "D";
}else {
    grade = "F";
}


document.write(`Name: ${name} <br>Sub 1: ${sub1} <br>Sub 2: ${sub2} <br>Sub 3: ${sub3} <br>Obtained Marks: ${obtained} / ${totalMarks} <br>Percentage: ${per.toFixed(2)}% <br>Result: ${result} <br>Grade: ${grade}<br><br><br>`);

// Login Registration System
const registerEmail = "madiha@gmail.com";
const registerPass = "madiha@123";
const confirmPass = "madiha@123";

const loginEmail = "madiha@gmail.com";
const loginPass = "madiha@123";

// Nested If Else
if (confirmPass === registerPass) {
    document.write("Bhai, aap kamyaabi k sth register hogaye! <br><br>");
    if (loginEmail === registerEmail && loginPass === registerPass) {
        document.write("Khush amdeed! aap login hochuke ho!");
    }else {
        document.write("Bhai jaan, ghalat info fill ki hai, dobara fill karo!");
    }
}else {
    document.write("Khuda k bande passwords match nahin huwe!");
}

document.write("<br><br><br>");
// Weekdays
var day = "Sunday";

switch (day) {
    case "Monday":
        document.write("Weekday");
        break;
    
    case "Friday":
        document.write("Weekday");
        break;

    default:
        document.write("Weekend");
        break;
}

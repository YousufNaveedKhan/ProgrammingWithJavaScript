# JavaScript – Assignment 04

**Topics:** Functions, User Input (`prompt()`), Conditional Statements, Switch, Factorial, and Arrays

Complete all six tasks using the concepts covered in class. Use functions wherever specified and display the required output using `document.write()`.

## Task 1 – Marksheet and Grading System Using Functions

Create a marksheet program using functions.

**Requirements:**
- Use `prompt()` to get the student's name and marks for 3 subjects.
- Calculate obtained marks and percentage.
- Create a function to check the Pass/Fail result. Passing criteria: 40%.
- Create a function to calculate the grade using the following criteria:
  - 80% and above: A+
  - 70% to below 80%: A
  - 60% to below 70%: B
  - 50% to below 60%: C
  - 40% to below 50%: D
  - Below 40%: F
- Display the complete marksheet, including name, subject marks, total marks, obtained marks, percentage, result, and grade.

Each subject carries 100 marks.

## Task 2 – Basic Calculator Using Functions

Recreate the calculator demonstrated in class.

**Requirements:**
- Use `prompt()` to get the first number, operator, and second number.
- Create separate functions for addition, subtraction, multiplication, and division.
- Use a `switch` statement to call the correct function based on the operator.
- Support only these four operators: `+`, `-`, `*`, `/`.
- Display an appropriate message for an invalid operator.
- Handle division by zero.

## Task 3 – Even or Odd Checker Using a Function

Create a function that receives a number and checks whether it is even or odd.

**Requirements:**
- Use `prompt()` to get a number from the user.
- Pass the number to your function.
- If the number is divisible by 2, display `Even`.
- Otherwise, display `Odd`.
- Handle zero separately: **Zero is neither even nor odd** for this assignment.

## Task 4 – Leap Year Checker Using a Function

Create a function that receives a year and determines whether it is a leap year.

**Requirements:**
- Use `prompt()` to get the year from the user.
- Pass the year to your function.
- Apply all three leap-year rules:
  1. If the year is divisible by 400, it is a leap year.
  2. Otherwise, if it is divisible by 100, it is not a leap year.
  3. Otherwise, if it is divisible by 4, it is a leap year.
  4. Otherwise, it is not a leap year.
- Display the result.

## Task 5 – Factorial Program Using a Function

First, understand factorial:

**Factorial** means multiplying a positive whole number by every whole number below it, down to 1. For example, `5! = 5 × 4 × 3 × 2 × 1 = 120`.

**Requirements:**
- Use `prompt()` to get a number from the user.
- Create a function that receives the number and calculates its factorial using a loop.
- Display the factorial.
- Handle negative numbers appropriately.
- Remember: `0! = 1`.

## Task 6 – Student List Using Arrays

Create an array containing the names of at least 8 students.

**Requirements:**
- Display the name of the student at index `2`.
- Display the total number of students using the array's `length` property.
- Use `forEach()` to display all student names.
- Display each student's name with a serial number, starting from 1.

**Example output:**
```text
1. Arbab
2. Abdul Moiz
3. Adyan
...
```

---

### Submission Instructions
- Complete all six tasks.
- Use meaningful function and variable names.
- Test your programs with different input values.
- Submit your JavaScript file as instructed in class.

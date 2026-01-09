# Gradebook App
Builds a simple JavaScript gradebook by calculating class averages, converting numeric scores into letter grades, and determining pass or fail status.

Assignment provided by FreeCodeCamp.org

## User Stories
1. You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
2. You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
3. You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.
4. The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".
5. You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:
  * "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
  * "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
  * Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.

## Tools & Languages Used
* JavaScript

## Features
1. Computes class average from an array of test scores
2. Converts test scores into letter grades
3. Determines whether a student passed the course
4. Generates a message summary of the class average, letter grade, and pass / fail result

## Project Reflections
This was a fairly easy assignment that reintroduced previous concepts. This made me recognize how many different ways a programmer can write a single function. One function I wrote checked if something is false, and provided a message determining that calculation. I could have made several variables and customized the message that way, but I just used interpolation. 

## Examples
```
JavaScript

studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75);
// "Class average: 45.625. Your grade: C. You passed the course.".

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file

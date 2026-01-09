/*
Assignment provided by FreeCodeCamp.org

Completed: January 9th, 2026

Program Description: Builds a gradebook by calculating class averages, converting numeric scores into letter grades, and determining pass or fail status. 

User Stories:
1. You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
2. You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
3. You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.
4. The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".
5. You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:
"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.
*/

function getAverage(testScores) { //Simple function to determine avarage. 
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i]; //Sum is the sum of everything in the testScores array provided. 
  }
  return sum / testScores.length; //Divides sum by the length of the testScores array to get avarage.
}

function getGrade(studentScore) { //A simple function that checks values and returns a letter grade.
  if (studentScore === 100) { //I originally wrote this as studentScore >= 100. That worked, but the assignment stated to only apply "A+" to specifically 100.
    return "A+"; 
  } else if (studentScore >= 90) {
    return "A";
  } else if (studentScore >= 80) {
    return "B";
  } else if (studentScore >= 70) {
    return "C";
  } else if (studentScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(studentScore) { //If getGrade(studentScore) is a failing grade, returns false. Otherwise, returns true.
  return getGrade(studentScore) !== "F";
}

function studentMsg(testScores, studentScore) { //This combines all above functions and returns a message to the user. I could have assigned everything to variables, but I just used interpolation. 
  if (hasPassingGrade(studentScore) === false) { 
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.` 
  } else {
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  }
}

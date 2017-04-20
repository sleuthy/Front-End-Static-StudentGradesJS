console.log("It's working!")

// Start with array of random scores in your JavaScript
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var letterGrade = {
A: [],
B: [],
C: [],
D: [],
F: []
};

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.
for (var i = 0; i < scores.length; i++) {
	if (scores[i] <= 60) {
		letterGrade.F.push(scores[i]);
	} else if ((scores[i] > 60) && (scores[i] <= 70)) {
		letterGrade.D.push(scores[i]);
	} else if ((scores[i] > 70) && (scores[i] <= 80)) {
		letterGrade.C.push(scores[i]);
	} else if ((scores[i] > 80) && (scores[i] <= 90)) {
		letterGrade.B.push(scores[i]);
	} else if ((scores[i] > 90) && (scores[i] <= 100)) {
		letterGrade.A.push(scores[i]);
	}
}

var lowestGrade = Math.min(82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87);
var highestGrade = Math.max(82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87);

// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?
console.log("How many of each grade?", letterGrade);
console.log("What is the lowest grade?", lowestGrade);
console.log("What is the highest grade?", highestGrade);
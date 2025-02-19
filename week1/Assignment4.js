const grades = ['A', 'B', 'C', 'D', 'F'];
const studentData = new Map();

for (let i = 1; i <= 200; i++) {
    const randomGrade = grades[Math.floor(Math.random() * grades.length)];
    studentData.set(`Student${i}`, randomGrade);
}

// 1. Check if at least one student received an "A".
let hasA = false;
for (let grade of studentData.values()) {
    if (grade === 'A') {
        hasA = true;
        break; 
    }
}

// 2. Get the names of students with a "B" grade.
const studentsWithB = [];
for (let [student, grade] of studentData) {
    if (grade === 'B') {
        studentsWithB.push(student);
    }
}

console.log("At least one student received an A:", hasA); // Boolean: true/false
console.log("Students with B grade:", studentsWithB); // Array of students with B

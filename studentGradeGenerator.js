function computeGrade() {
    // Prompt user for input
    let marks = prompt("Enter the student's marks (between 0 and 100):");
    
    // Convert input to a number
    marks = parseFloat(marks);

    // Validate input range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Marks should be a number between 0 and 100.");
        return;
    }

    // Determine the grade based on marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    alert(`Student's grade: ${grade}`);
}

computeGrade();

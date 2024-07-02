function updateStudentGradeByCity(students, city, newGrades) {
  const gradeIds = [];
  for (const grade of newGrades.values()) {
    gradeIds.push(grade.studentId);
  }
  const CityStudents = students.filter((student) => student.location === city);
  CityStudents.map((student, key) => (
    gradeIds.includes(student.id) ? console.log('YES', newGrades[key]) : console.log('No', newGrades[key])
  ));
  return CityStudents;
}

export default updateStudentGradeByCity;

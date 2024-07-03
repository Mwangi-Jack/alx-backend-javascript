function updateStudentGradeByCity(students, city, newGrades) {
  const cityStduents = students.filter((student) => student.location === city);
  return cityStduents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;

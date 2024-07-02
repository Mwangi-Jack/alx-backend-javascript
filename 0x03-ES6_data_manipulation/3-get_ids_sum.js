function getStudentIdsSum(students) {
  const ids = [];
  students.map((key) => ids.push(key.id));
  return ids.reduce((acc, curr) => acc + curr);
}

export default getStudentIdsSum;

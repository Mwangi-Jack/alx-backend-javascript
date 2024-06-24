export default function createIteratorObject(report) {
  let employeesArr = [];
  for (const val of Object.values(report)) {
    for (const employees of Object.values(val)) {
      employeesArr = [...employeesArr, ...employees];
    }
  }

  return employeesArr;
}

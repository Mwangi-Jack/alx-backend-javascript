/* eslint-disable no-unused-vars */
export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const getNumberOfDepartments = (employeesList) => Object.keys(employeesList).length;

  return { allEmployees, getNumberOfDepartments };
}

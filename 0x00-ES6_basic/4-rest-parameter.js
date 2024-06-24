/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const i of args) {
    total += 1;
  }
  return total;
}

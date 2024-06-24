/* eslint-disable guard-for-in */
export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const i in reportWithIterator) {
    if (i === '0') {
      string += reportWithIterator[i];
    } else {
      string += ` | ${reportWithIterator[i]}`;
    }
  }

  return string;
}

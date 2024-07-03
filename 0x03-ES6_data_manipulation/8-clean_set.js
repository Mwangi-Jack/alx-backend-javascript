/* eslint-disable no-unused-expressions */
function cleanSet(set, startString) {
  let returnString = '';
  let counter = 0;
  if (startString) {
    for (const string of set.values()) {
      if (string.includes(startString)) {
        counter === 0 ? returnString += string.replace(startString, '')
          : returnString += string.replace(startString, '-');
        counter += 1;
      }
    }
  }

  return returnString;
}

export default cleanSet;

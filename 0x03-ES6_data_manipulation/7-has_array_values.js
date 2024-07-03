function hasValuesFromArray(set, array) {
  let ret;
  array.forEach((element) => {
    ret = set.has(element);
  });
  // return set.isSupersetOf(new Set([...array]));
  return ret;
}

export default hasValuesFromArray;

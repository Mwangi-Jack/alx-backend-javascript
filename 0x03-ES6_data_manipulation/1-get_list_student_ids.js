function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const ids = [];
  arr.map((key) => ids.push(key.id));
  return ids;
}

export default getListStudentIds;

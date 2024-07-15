class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name; else throw TypeError('Name must be a string');
    if (typeof length === 'number') this._length = length; else throw TypeError('Length must be a number');
    if (typeof students === 'object') this._students = students; else throw TypeError('Students must be an array');
  }

  set name(name) {
    if (typeof name === 'string') this._name = name; else throw TypeError('Name must be a string');
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') this._length = length; else throw TypeError('Length must be a number');
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students === 'object') this._students = students; else throw TypeError('Students must be an array');
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;

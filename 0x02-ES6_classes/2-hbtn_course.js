class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    if (typeof length === 'number') this._length = length;
    if (typeof students === 'object') this._students = students;
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
    this._students = students;
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;

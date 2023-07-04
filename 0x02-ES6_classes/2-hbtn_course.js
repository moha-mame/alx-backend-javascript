export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('length must be a number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('students must be an array of strings');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'students');
  }

  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`Invalid ${attributeName}. Expected a string.`);
    }
    return value;
  }

  validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`Invalid ${attributeName}. Expected a number.`);
    }
    return value;
  }

  validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`Invalid ${attributeName}. Expected an array.`);
    }
    return value;
  }
}

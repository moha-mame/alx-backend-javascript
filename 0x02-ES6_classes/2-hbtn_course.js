export defaul class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateArray(students, 'students');
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

/**
 * Represents a Horbelton Course.
 */
export default class HorbeltonCourse {
  /**
   * Creates a new instance of the HorbeltonCourse class.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - The students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the students in the course.
   */
  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('students must be an array');
    }
    if (students.every(student => typeof student !== 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students;
  }
}

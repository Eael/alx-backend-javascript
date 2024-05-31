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
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Gets the students in the course.
   * @returns {string[]} The students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the name of the course.
   * @param {string} name - The name of the course.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  /**
   * Sets the length of the course.
   * @param {number} length - The length of the course.
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  /**
   * Sets the students in the course.
   * @param {string[]} students - The students in the course.
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    if (students.some(student => typeof student !== 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students;
  }
}

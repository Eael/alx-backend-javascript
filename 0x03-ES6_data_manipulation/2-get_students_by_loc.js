/**
 * @param {Array} students
 * @param {String} city
 * @returns {Array}
 */
export default function getStudentsByLocation(students, city) {
  if (!(students instanceof Array)) return [];

  return students.filter((student) => student.location === city);
}

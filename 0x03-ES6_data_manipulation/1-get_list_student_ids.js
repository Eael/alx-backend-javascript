/**
 * @param {Array} student
 * @returns {Array} student ids
 */
export default function getListStudents(students) {
  if (!(students instanceof Array)) return [];

  return students.map((student) => student.id);
}

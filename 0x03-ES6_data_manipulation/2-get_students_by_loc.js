/**
 * @param {number} n
 */
export default function getStudentsByLocation(students) {
  return students.reduce((acc, student) => {
    if (!acc[student.location]) {
    acc[student.location] = [];
    }
    acc[student.location].push(student);
    return acc;
  }, {});
}

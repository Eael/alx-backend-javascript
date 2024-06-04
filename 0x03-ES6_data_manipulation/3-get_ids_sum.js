export default function getStudentIdsSum(students) {
  if (!(students instanceof Array)) return [];

  return students.reduce((acc, student) => acc + student.id, 0);
}

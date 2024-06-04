export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) return [];
  if (typeof city !== 'string') return [];

  return students.filter(student => student.city === city).map(student => {
  const grades = newGrades.find(grade => grade.studentId === student.id)
  return grades ? { ...student, grade: grades.grade } : student
  })
}
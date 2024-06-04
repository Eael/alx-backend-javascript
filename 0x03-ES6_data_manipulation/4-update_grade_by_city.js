export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) return [];
  if (typeof city !== 'string') return [];
  const defaultGrade = { studentId: -1, grade: 'N/A' }

  return students.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: grade && student.location === city ? grade.grade : defaultGrade.grade
    }
  })
}

export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (Array.isArray(getListStudents)) {
    return getListStudents
      .filter((student) => student.location === city)
      .map((student) => {
        const grade = newGrades.find((item) => item.studentId === student.id);
        if (grade) {
          return { ...student, grade: grade.grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}

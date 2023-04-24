export default function getStudentIdsSum(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.reduce((acc, student) => acc + student.id, 0);
  }
  return [];
}

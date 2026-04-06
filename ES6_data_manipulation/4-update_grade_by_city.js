export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (typeof city !== 'string') {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  // Create a map of studentId -> grade for quick lookup
  const gradeMap = new Map(newGrades.map(grade => [grade.studentId, grade.grade]));

  // First filter students for the specific city, then map to update grades
  return students
    .filter(student => student.location === city)
    .map(student => ({
      ...student,
      grade: gradeMap.has(student.id) ? gradeMap.get(student.id) : 'N/A'
    }));
}
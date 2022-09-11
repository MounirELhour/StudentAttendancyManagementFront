import AttendancyListeComponent from "../StudentComponents/AttendancyListeCopmonent";
import { GetStudentAttendances } from "../../services/StudentService";
import { useState, useEffect } from "react";

const StudentComponent = ({ user }) => {
  const [studentAttendances, setStudentAttendances] = useState([]);
  const [refactoredStudentAttendances, setRefactoredStudentAttendances] =
    useState([]);
  const refactorAttendances = (studentAttendances) => {
    const attendances = [];
    studentAttendances.forEach((attendance) => {
      attendances.push({
        id: attendance.id,
        justfied: attendance.justfied,
        user: attendance.user,
        matiere: attendance.matiere.name,
        classRoom: attendance.classRoom.name,
      });
    });
    setRefactoredStudentAttendances(attendances);
  };

  useEffect(() => {
    GetStudentAttendances(user?.id, setStudentAttendances);
    refactorAttendances(studentAttendances);
  }, [user]);
  console.log(refactoredStudentAttendances);
  return (
    <div>
      {/* <h1>Student section</h1> */}
      <AttendancyListeComponent
        studentAttendances={refactoredStudentAttendances}
      />
    </div>
  );
};

export default StudentComponent;

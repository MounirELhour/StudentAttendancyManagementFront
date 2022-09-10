import AttendancyListeComponent from "../StudentComponents/AttendancyListeCopmonent";
import { GetStudentAttendances } from "../../services/StudentService";
import { useState, useEffect } from "react";

const StudentComponent = ({ user }) => {
  const [studentAttendances, setStudentAttendances] = useState([]);
  useEffect(() => {
    GetStudentAttendances(user?.id, setStudentAttendances);
  }, []);

  return (
    <div>
      {/* <h1>Student section</h1> */}
      <AttendancyListeComponent studentAttendances={studentAttendances} />
    </div>
  );
};

export default StudentComponent;

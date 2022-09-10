import TeacherAttendancyListComponent from "../TeacherComponents/TeacherAttendancyListComponent";
import { useState, useEffect } from "react";
import { GetClassRooms } from "../../services/TeacherService";
const TeacherComponent = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    GetClassRooms(setClasses);
  }, []);
  console.log(classes);
  return (
    <div>
      <TeacherAttendancyListComponent classes={classes?.classRooms} />
    </div>
  );
};
export default TeacherComponent;

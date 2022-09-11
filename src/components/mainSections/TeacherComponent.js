import TeacherAttendancyListComponent from "../TeacherComponents/TeacherAttendancyListComponent";
import { useState, useEffect } from "react";
import { GetClassRooms } from "../../services/TeacherService";
const TeacherComponent = ({ user }) => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    GetClassRooms(setClasses);
  }, []);

  return (
    <div>
      <TeacherAttendancyListComponent
        classes={classes?.classRooms}
        user={user}
      />
    </div>
  );
};
export default TeacherComponent;

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  GetClassRoomStudents,
  setStudentsAttendances,
} from "../../services/TeacherService";
const ex = {
  justfied: true,
  user: "string",
  matiere: "string",
  classRoom: "string",
  date: "2022-09-11T18:52:40.247Z",
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "email", headerName: "email", width: 250 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
];

export default function StudentsListComponent({ classId, user }) {
  const [studentsResponse, setStudentsResponse] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  //   const [postAttendanceObject, setPostAttendanceObject] = useState({});
  console.log(classId);

  const handleAttendaceSubmition = () => {
    selectedStudents.forEach((student) => {
      const attendanceObject = {
        justfied: false,
        user: "/api/users/" + student?.id,
        matiere: "/api/matieres/" + user?.matiere.id,
        classRoom: "/api/class_rooms/" + classId,
        date: new Date(),
      };
      setStudentsAttendances(attendanceObject);
      window.alert("The attandances has been succesfuly submited");
    });
  };

  useEffect(() => {
    GetClassRoomStudents(setStudentsResponse, classId);
  }, [classId]);

  return (
    <div style={{ height: 400, width: 1000 }}>
      {studentsResponse && (
        <DataGrid
          rows={studentsResponse && studentsResponse}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = studentsResponse?.filter((row) =>
              selectedIDs.has(row.id)
            );

            setSelectedStudents(selectedRows);
          }}
        />
      )}
      <div className="container">
        <button className="btn btn-primary" onClick={handleAttendaceSubmition}>
          Submit attendances
        </button>
      </div>
    </div>
  );
}

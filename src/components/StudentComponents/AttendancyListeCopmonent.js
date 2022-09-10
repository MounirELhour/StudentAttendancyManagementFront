import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 200,
  },
  {
    field: "justfied",
    headerName: "Justfied",
    type: "boolean",
    width: 200,
  },
  {
    field: "classRoom",
    headerName: "Classe",
    type: "string",
    width: 200,
  },
  {
    field: "matiere",
    headerName: "Matiere",
    type: "string",
    width: 200,
  },
];
export default function AttendancyListeComponent({ studentAttendances }) {
  return (
    <div style={{ height: 400, width: "100%" }} className="container">
      <DataGrid
        rows={studentAttendances}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

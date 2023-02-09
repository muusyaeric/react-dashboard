import React from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";

const DataTable = () => {

  const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:()=>{
    return (
      <div className="cell-action">
        <Link to="/users/test" style={{textDecoration: "none"}}>
          <div className="view-button">View</div>
        </Link>
        <div className="delete-button">Delete</div>
      </div>
    )
  }}]
  return (
    <div className="dataTable">
      <div className="dataTable-title">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

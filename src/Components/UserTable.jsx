import React, { useState } from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DialogueContent from "../Components/DialogueContent";

function UserTable(props) {
  const { data } = props;
  const [dialogData, setDialogData] = useState({ isOpen: false, data: {} });
  // const [showData, setShowData] = useState("");

  const handleClickOpen = (selectedRow) => {
    console.log("selected Data :::>>", selectedRow);
    setDialogData({ isOpen: true, data: selectedRow });
  };

  // const [page, setPage] = useState(1);
  // const [pageNumbers, setPageNumbers] = useState(1);
  // const [totalItemsCount, setTotalItemCount] = useState(1);
  // const selectPage = (page) => {
  //   setPage(page);
  // };
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const recordsPage = 20;
  //   const lastIndex = currentPage * recordsPage;
  //   const firstIndex = lastIndex - recordsPage;
  //   const records = data.slice(firstIndex, lastIndex);
  //   const newPage = Math.ceil(data.length / recordsPage);
  //   const numbers = [...Array(newPage + 1).keys()].slice(1);
  //   const prePage = () => {
  //     if (currentPage !== firstIndex) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };
  //   const nextPage = () => {
  //     if (currentPage !== lastIndex) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const changePage = (id) => {
  //     setCurrentPage(id);
  //   };
  console.log("Data :::>>>", data);
  const columns = [
    {
      field: "API",
      headerName: "API",
      width: 150,
      sortable: true,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 150,
      sortable: true,
    },
    {
      field: "Auth",
      headerName: "Auth",
      width: 110,
      editable: true,
      sortable: true,
    },
    {
      field: "Cors",
      headerName: "Cors",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      sortable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",
      renderCell: (params) => (
        <VisibilityIcon
          onClick={() => {
            handleClickOpen(params?.row);
          }}
        />
      ),
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "Words Count",
      headerName: "Words Count",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      sortable: true,
    },
  ];
  return (
    <div className="container">
      <div>
        <DialogueContent
          dialogData={dialogData}
          setDialogData={setDialogData}
        />
      </div>
      <DataGrid
        getRowId={(row) => row.API}
        rows={data}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => sorting("API")}>API</th>
            <th onClick={() => sorting("Description")}>Description</th>
            <th>Auth</th>
            <th>Cors</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, key) => (
            <tr key={key}>
              <td>{user.API}</td>
              <td>{user.Description}</td>
              <td>{user.Auth}</td>
              <td>{user.Cors}</td>
              <td>{user.Link}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationComponent
        selectPage={selectPage}
        pageNumbers={pageNumbers}
        totalItemsCount={totalItemsCount}
      /> */}

      <div>
        {/* <button onClick={prePage}>Prev</button>
        {numbers.map((val, index) => {
          return (
            <button key={index} onClick={() => changePage(val)}>
              {val}
            </button>
          );
        })}
        <button onClick={nextPage}>Next</button> */}
      </div>
    </div>
  );
}

export default UserTable;

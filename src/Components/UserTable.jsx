import React, { useState } from "react";
import "./Header.css";

function UserTable(props) {
  const { data, sorting } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 20;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = data.slice(firstIndex, lastIndex);
  const newPage = Math.ceil(data.length / recordsPage);
  const numbers = [...Array(newPage + 1).keys()].slice(1);
  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="container">
      <table className="table table-bordered">
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
          {records.map((user, key) => (
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
      <div>
        <button onClick={prePage}>Prev</button>
        {numbers.map((val, index) => {
          return (
            <button key={index} onClick={() => changePage(val)}>
              {val}
            </button>
          );
        })}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default UserTable;

import React from "react";
import "./Header.css";

function UserTable(props) {
  const { data, sorting } = props;
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
    </div>
  );
}

export default UserTable;

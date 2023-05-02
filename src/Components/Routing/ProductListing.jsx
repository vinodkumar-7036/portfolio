import React, { useEffect } from "react";
import UserTable from "../UserTable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function ProductListing() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => {
    return state.tableData;
  });

  const getData = () => {
    axios.get("https://api.publicapis.org/entries").then((response) => {
      dispatch({ type: "TABLE_DATA", payload: response.data.entries });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const sorting = (col) => {
    dispatch({ type: "CHANGE_SORTING", payload: col });
  };
  return (
    <div>
      <h1>Table Demo</h1>

      <UserTable data={tableData} sorting={sorting} />
    </div>
  );
}

export default ProductListing;

import React, { useEffect, useState } from "react";
import UserTable from "../UserTable";
import axios from "axios";

function ProductListing() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const getData = () => {
    axios
      .get("https://api.publicapis.org/entries")
      // .then((result) => result.json())
      .then((response) => {
        setData(response.data.entries);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div>
      <h1>Table Demo</h1>
      <UserTable data={data} sorting={sorting} />
    </div>
  );
}

export default ProductListing;

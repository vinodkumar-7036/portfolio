import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function PageLoader() {
  return (
    <div>
      Page Loading...
      <CircularProgress color="secondary" />
    </div>
  );
}

export default PageLoader;

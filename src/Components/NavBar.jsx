import React from "react";
import { Routes, Route } from "react-router-dom";
import { SideNavComponent } from "./SideNavComponent";
import DashBoard from "./DashBoard";

function NavBar() {
  return (
    <div>
      <SideNavComponent />
      <Routes>
        <Route path="/dashboard" component={<DashBoard />} />
        {/* <Route path="/" exact component={Dashboard} />
        <Route path="/" exact component={Dashboard} /> */}
      </Routes>
    </div>
  );
}

export default NavBar;

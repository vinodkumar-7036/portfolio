import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Routing/DashBoard";
import Orders from "./Routing/Orders";
import TeamMembers from "./Routing/TeamMembers";

import Partners from "./Routing/Partners";
import ProductListing from "./Routing/ProductListing";
import Awards from "./Routing/Awards";
import AboutUs from "./Routing/AboutUs";
import PaymentInfo from "./Routing/PaymentInfo";

function NavBar() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/teammembers" element={<TeamMembers />} />
        <Route path="/partners" element={<Partners />} />
        <Route exact path="/productlistings" element={<ProductListing />} />
        <Route path="/awards&honors" element={<Awards />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
      </Routes>
    </div>
  );
}

export default NavBar;

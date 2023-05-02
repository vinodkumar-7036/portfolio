import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./LazyLoading/PageLoader";
const TeamMembers = lazy(() => import("./Routing/TeamMembers"));
const Partners = lazy(() => import("./Routing/Partners"));
const ProductListing = lazy(() => import("./Routing/ProductListing"));
const Awards = lazy(() => import("./Routing/Awards"));
const AboutUs = lazy(() => import("./Routing/AboutUs"));
const PaymentInfo = lazy(() => import("./Routing/PaymentInfo"));
const Orders = lazy(() => import("./Routing/Orders"));
const DashBoard = lazy(() => import("./Routing/DashBoard"));

function NavBar() {
  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/teammembers" element={<TeamMembers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/productlistings" element={<ProductListing />} />
          <Route path="/awards&honors" element={<Awards />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default NavBar;

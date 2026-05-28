import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingContact from "./RoutingContact";
import RoutingDashboard from "./RoutingDashboard";
import RoutingProfile from "./RoutingProfile";
import RoutingAccounts from "./RoutingAccounts";
import RoutingNavbar from "./RoutingNavbar";
import RoutingHome from "./RountingHome";
import RoutingProductDetails from "./RoutingProductDetails";

const RoutingParent = () => {
  return (
    <>
      <BrowserRouter>
        <RoutingNavbar />
        <Routes>
          <Route path="/" element={<RoutingHome />} />
          <Route path="/contact" element={<RoutingContact />} />
          {/* nested route */}
          <Route path="/dashboard" element={<RoutingDashboard />}>
            <Route path="profile" element={<RoutingProfile />}>
              {/* <Route path=":id" /> */}
            </Route>
            <Route path="accounts" element={<RoutingAccounts />} />
          </Route>
          <Route path="/product/:prodId" element={<RoutingProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingParent;

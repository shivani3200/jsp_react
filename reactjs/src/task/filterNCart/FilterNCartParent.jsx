import React from "react";

import { BrowserRoute, Routes, Route } from "react-router-dom";
import FilterNCartNavbar from "./FilterNCartNavbar";

const FilterNCartParent = () => {
  return (
    <>
      <BrowserRoute>
      <FilterNCartNavbar/>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="cart">Cart</Route>
        </Routes>
      </BrowserRoute>
    </>
  );
};

export default FilterNCartParent;

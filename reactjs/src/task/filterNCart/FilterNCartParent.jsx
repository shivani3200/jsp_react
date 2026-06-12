import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterNCartNavbar from "./FilterNCartNavbar";
import FilterNCartHome from "./FilterNCartHome";
import AddtoCartCard from "./AddtoCartCard";

const FilterNCartParent = () => {
  return (
    <BrowserRouter>
      <FilterNCartNavbar />
      <Routes>
        <Route path="/" element={<FilterNCartHome/>} />
        <Route path="/cart" element={<AddtoCartCard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default FilterNCartParent;
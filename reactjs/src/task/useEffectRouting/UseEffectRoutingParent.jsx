import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffectRoutingHome from "./UseEffectRoutingHome";
import UseEffectRoutingUser from "./UseEffectRoutingUser";
import UseEffectRoutingProducts from "./UseEffectRoutingProducts";

const UseEffectRoutingParent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseEffectRoutingHome />}></Route>
          <Route path="/users" element={<UseEffectRoutingUser />}></Route>
          <Route path="/products" element={<UseEffectRoutingProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default UseEffectRoutingParent;

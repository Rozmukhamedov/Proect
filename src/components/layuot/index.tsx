import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

function Layuot() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layuot;

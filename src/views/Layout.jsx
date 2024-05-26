import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;

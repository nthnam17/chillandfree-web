import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, data }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

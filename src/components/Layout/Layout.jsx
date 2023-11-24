import React from "react";
import { LayoutWrapper } from "./LayoutStyles";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;

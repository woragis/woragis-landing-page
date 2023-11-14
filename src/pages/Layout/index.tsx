import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GlobalStyle from "../../styles/GlobalStyles";
import SideNav from "../../components/SideNav";

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid grey; */
  width: 100%;
  height: 15vh;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

const Layout = () => {
  return (
    <div>
      <header>
        <LogoContainer>
          <LogoImage src={logo} alt="logo" />
        </LogoContainer>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

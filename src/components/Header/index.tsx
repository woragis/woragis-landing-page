import React from "react";
import { StyledHeader } from "./style";
import { HeaderType } from "../../types/componentsType";

const Header: React.FC<HeaderType> = () => {
  return (
    <>
      <StyledHeader id="header">
        <div className="logo">
          <h2>Logo</h2>
          <h4>Jezreel de Andrade</h4>
        </div>
        <nav>Guys is that freddy fesbear?</nav>
      </StyledHeader>
      <label htmlFor="theme-switch" className="theme-button-container">
        <input
          type="checkbox"
          name="theme-switch"
          id="theme-switch"
          placeholder="none"
        />
        <span className="theme-switch"></span>
      </label>
    </>
  );
};

export default Header;

import React from "react";
import { StyledFooter } from "./style";
import { FooterType } from "../../types/componentsType";

const Footer: React.FC<FooterType> = () => {
  return (
    <StyledFooter id="footer">
      <small>Jezreel de Andrade - 2023 &copy;</small>
    </StyledFooter>
  );
};

export default Footer;

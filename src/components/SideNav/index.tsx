import React from "react";
import { StyledSideNav } from "./style";
import { SideNavType } from "../../types/componentsType";

const SideNav: React.FC<SideNavType> = () => {
  const links = [
    { linkId: "top", title: "Top" },
    { linkId: "projects", title: "Projects" },
    { linkId: "about-me", title: "About" },
    { linkId: "contact", title: "Contact" },
  ];
  const sideButtonLinks = links.map(({ linkId, title }) => {
    return (
      <a href={"#" + linkId}>
        <button className="side-nav">{title}</button>
      </a>
    );
  });
  return <StyledSideNav id="side-nav">{sideButtonLinks}</StyledSideNav>;
};

export default SideNav;

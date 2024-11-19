import React from "react";
import { NavLinkContainer, NavLinkSpan, StyledIcon } from "./nav-link.styles";

const NavLink = ({ name, route, icon, activeNavLink }) => {
  return (
    <NavLinkContainer to={route} active={(activeNavLink === route).toString()}>
      <StyledIcon icon={icon} />
      <NavLinkSpan>{`${name[0].toUpperCase()}${name.slice(1)}`}</NavLinkSpan>
    </NavLinkContainer>
  );
};

export default NavLink;

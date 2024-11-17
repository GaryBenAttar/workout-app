import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  LogoContainer,
  LogoStyled,
  NavigationContainer,
  NavigationLinks,
  NavLink,
  SearchUserContainer,
  SearchUserInput,
} from "./navigation.styles";

import { SettingsContext } from "../../contexts/settings.context";

export default function Navigation() {
  const { activeNavLink } = useContext(SettingsContext);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={handleLogoClick}>
          <LogoStyled />
          <span>Workouts</span>
        </LogoContainer>
        {/* <SearchUserContainer>
          <i className="fa-solid fa-magnifying-glass"></i>
          <SearchUserInput placeholder="Search User" type="text" />
        </SearchUserContainer> */}
        <NavigationLinks>
          <NavLink to="/" className={activeNavLink === "feed" ? "active" : ""}>
            <i className="fa-solid fa-house"></i>
            <span>Feed</span>
          </NavLink>
          <NavLink
            to="routines"
            className={activeNavLink === "routines" ? "active" : ""}
          >
            <i className="fa-solid fa-clipboard"></i>
            <span>Routines</span>
          </NavLink>
          <NavLink
            to="exercises"
            className={activeNavLink === "exercises" ? "active" : ""}
          >
            <i className="fa-solid fa-dumbbell"></i>
            <span>Exercises</span>
          </NavLink>
          <NavLink
            to="profile"
            className={activeNavLink === "profile" ? "active" : ""}
          >
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </NavLink>
          <NavLink
            to="settings"
            className={activeNavLink === "settings" ? "active" : ""}
          >
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </NavLink>
        </NavigationLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

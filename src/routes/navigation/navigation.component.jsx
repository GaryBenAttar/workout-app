import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  LogoStyled,
  NavigationContainer,
  NavigationLinks,
  NavLink,
  SearchUserContainer,
  SearchUserInput,
} from "./navigation.styles";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("feed");

  const navigate = useNavigate();

  const handleLogoClick = () => {
    setActiveLink("feed");
    navigate("/");
  };

  return (
    <>
      <NavigationContainer>
        <LogoStyled onClick={handleLogoClick} />
        {/* <SearchUserContainer>
          <i className="fa-solid fa-magnifying-glass"></i>
          <SearchUserInput placeholder="Search User" type="text" />
        </SearchUserContainer> */}
        <NavigationLinks>
          <NavLink
            to="/"
            className={activeLink === "feed" ? "active" : ""}
            onClick={() => setActiveLink("feed")}
          >
            <i className="fa-solid fa-house"></i>
            <span>Feed</span>
          </NavLink>
          <NavLink
            to="routines"
            className={activeLink === "routines" ? "active" : ""}
            onClick={() => setActiveLink("routines")}
          >
            <i className="fa-solid fa-clipboard"></i>
            <span>Routines</span>
          </NavLink>
          <NavLink
            to="exercises"
            className={activeLink === "exercises" ? "active" : ""}
            onClick={() => setActiveLink("exercises")}
          >
            <i className="fa-solid fa-dumbbell"></i>
            <span>Exercises</span>
          </NavLink>
          {/* <NavLink
            to="profile"
            className={activeLink === "profile" ? "active" : ""}
            onClick={() => setActiveLink("profile")}
          >
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </NavLink> */}
          <NavLink
            to="settings"
            className={activeLink === "settings" ? "active" : ""}
            onClick={() => setActiveLink("settings")}
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

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  LogoContainer,
  LogoSpan,
  LogoStyled,
  NavigationContainer,
  NavigationLinks,
  SearchUserContainer,
  SearchUserInput,
  StyledIcon,
} from "./navigation.styles";

import {
  faClipboard,
  faDumbbell,
  faGear,
  faHome,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import NavLink from "../../components/nav-link/nav-link.component";

const routes = [
  { name: "feed", path: "/", icon: faHome },
  { name: "routines", path: "/routines", icon: faClipboard },
  { name: "exercises", path: "/exercises", icon: faDumbbell },
  { name: "profile", path: "/profile", icon: faUser },
  { name: "settings", path: "/settings", icon: faGear },
];

const Navigation = () => {
  const location = useLocation();
  const activeNavLink = location.pathname;

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={handleLogoClick}>
          <LogoStyled />
          <LogoSpan>Workouts</LogoSpan>
        </LogoContainer>
        {/* <SearchUserContainer>
        <StyledIcon icon={faMagnifyingGlass} />
          <SearchUserInput placeholder="Search User" type="text" />
        </SearchUserContainer> */}
        <NavigationLinks>
          {routes.map((route) => {
            const { name, path, icon } = route;

            return (
              <NavLink
                activeNavLink={activeNavLink}
                name={name}
                route={path}
                icon={icon}
                key={name}
              />
            );
          })}
        </NavigationLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

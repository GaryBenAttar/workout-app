import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ProfileContainer,
  UserContainer,
  UserDetailsContainer,
  UserEdit,
  UserInfoContainer,
  UserSummaryContainer,
} from "./profile.styles";

import { SettingsContext } from "../../contexts/settings.context";
import { UserContext } from "../../contexts/user.context";

import UserImage from "../../assets/logo_panda.png";

export default function Profile() {
  const navigate = useNavigate();
  const { setActiveNavLink } = useContext(SettingsContext);
  const { username, fullname, workouts } = useContext(UserContext);

  const handleEditProfile = () => {
    navigate("/settings");
  };

  useEffect(() => setActiveNavLink("profile"), []);
  return (
    <ProfileContainer>
      <UserContainer>
        <img alt="user" src={UserImage} />
        <UserInfoContainer>
          <UserEdit>
            <span>{username}</span>
            <button onClick={handleEditProfile}>Edit Profile</button>
          </UserEdit>
          <UserDetailsContainer>
            <span>{fullname}</span>
            <UserSummaryContainer>
              <span>Workouts</span>
              <span>{workouts.length}</span>
            </UserSummaryContainer>
          </UserDetailsContainer>
        </UserInfoContainer>
      </UserContainer>
    </ProfileContainer>
  );
}

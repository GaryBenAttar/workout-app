import { useNavigate } from "react-router-dom";
import {
  ProfileContainer,
  UserContainer,
  UserInfoContainer,
} from "./profile.styles";
import { SettingsContext } from "../../contexts/settings.context";
import { useContext, useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/settings");
  };

  const { setActiveNavLink } = useContext(SettingsContext);

  useEffect(() => setActiveNavLink("profile"), []);
  return (
    <ProfileContainer>
      <UserContainer>
        <img alt="user" />
        <UserInfoContainer>
          <div>
            <span>Username</span>
            <button onClick={handleEditProfile}>Edit Profile</button>
          </div>
          <div>
            <span>Full Name</span>
            <div>
              <span>Workouts</span>
              <span>104</span>
            </div>
          </div>
        </UserInfoContainer>
      </UserContainer>
    </ProfileContainer>
  );
}

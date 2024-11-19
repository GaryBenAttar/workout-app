import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import {
  ProfileContainer,
  UserContainer,
  UserDetailsContainer,
  UserDetailsSpan,
  UserEdit,
  UserEditButton,
  UserEditSpan,
  UserImage,
  UserInfoContainer,
  UserSummaryContainer,
  UserSummarySpan,
} from "./profile.styles";

import image from "../../assets/logo_panda.png";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { username, fullname, workouts } = user;

  const handleEditProfile = () => {
    navigate("/settings");
  };

  return (
    <ProfileContainer>
      <UserContainer>
        <UserImage alt="user" src={image} />
        <UserInfoContainer>
          <UserEdit>
            <UserEditSpan>{username}</UserEditSpan>
            <UserEditButton onClick={handleEditProfile}>
              Edit Profile
            </UserEditButton>
          </UserEdit>
          <UserDetailsContainer>
            <UserDetailsSpan>{fullname}</UserDetailsSpan>
            <UserSummaryContainer>
              <UserSummarySpan>Workouts</UserSummarySpan>
              <UserSummarySpan>{workouts.length}</UserSummarySpan>
            </UserSummaryContainer>
          </UserDetailsContainer>
        </UserInfoContainer>
      </UserContainer>
    </ProfileContainer>
  );
};

export default Profile;

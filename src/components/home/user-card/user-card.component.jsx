import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  FullnameSpan,
  UserCardContainer,
  UserImageContainer,
  UserNamesContainer,
  UsernameSpan,
  UserProfileButton,
  UserSummary,
  UserSummaryContainer,
  UserSummarySpan,
  UserSummaryTitleSpan,
} from "./user-card.styles";

import { UserContext } from "../../../contexts/user.context";

const UserCard = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { username, fullname, photo, workouts } = user;

  const handleSeeProfile = () => {
    navigate("settings");
  };

  return (
    <UserCardContainer>
      <UserImageContainer alt="user" src={photo} />
      <UserNamesContainer>
        <UsernameSpan>{username}</UsernameSpan>
        <FullnameSpan>{fullname}</FullnameSpan>
      </UserNamesContainer>
      <UserSummaryContainer>
        <UserSummary>
          <UserSummaryTitleSpan>Workouts</UserSummaryTitleSpan>
          <UserSummarySpan>{workouts.length}</UserSummarySpan>
        </UserSummary>
        {/* <UserSummary>
          <UserSummaryTitleSpan>Followers</UserSummaryTitleSpan>
          <UserSummarySpan>{followers}</UserSummarySpan>
        </UserSummary>
        <UserSummary>
          <UserSummaryTitleSpan>Following</UserSummaryTitleSpan>
          <UserSummarySpan>{following}</UserSummarySpan>
        </UserSummary> */}
      </UserSummaryContainer>
      <UserProfileButton onClick={handleSeeProfile}>
        See your profile
      </UserProfileButton>
    </UserCardContainer>
  );
};

export default UserCard;

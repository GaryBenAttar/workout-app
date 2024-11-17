import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  UserCardContainer,
  UserImageContainer,
  UserNamesContainer,
  UserSummary,
  UserSummaryContainer,
} from "./user-card.styles";

import UserImage from "../../assets/logo_panda.png";
import { UserContext } from "../../contexts/user.context";

export default function UserCard() {
  const navigate = useNavigate();

  const { username, fullname, workouts, followers, following } =
    useContext(UserContext);

  const handleSeeProfile = () => {
    navigate("settings");
  };

  return (
    <UserCardContainer>
      <UserImageContainer alt="user" src={UserImage} />
      <UserNamesContainer>
        <span className="username">{username}</span>
        <span className="fullname">{fullname}</span>
      </UserNamesContainer>
      <UserSummaryContainer>
        <UserSummary>
          <span className="summary-title">Workouts</span>
          <span>{workouts.length}</span>
        </UserSummary>
        {/* <UserSummary>
          <span className="summary-title">Followers</span>
          <span>{followers}</span>
        </UserSummary>
        <UserSummary>
          <span className="summary-title">Following</span>
          <span>{following}</span>
        </UserSummary> */}
      </UserSummaryContainer>
      <button onClick={handleSeeProfile}>See your profile</button>
    </UserCardContainer>
  );
}

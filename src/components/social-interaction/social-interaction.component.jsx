import React, { useState } from "react";
import {
  CommentButton,
  CommentContainer,
  CommentInput,
  SocialInteraction,
  SocialInteractionContainer,
  StyledIcon,
} from "./socia-interaction.styles";
import { UserImageContainer } from "../workout-history-card/workout-history-card.styles";

import UserImage from "../../assets/logo_panda.png";
import {
  faThumbsUp as faThumbsUpSolid,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpRegular } from "@fortawesome/free-regular-svg-icons";

const SocialInteractions = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <SocialInteractionContainer>
        <SocialInteraction>
          <StyledIcon
            icon={liked ? faThumbsUpSolid : faThumbsUpRegular}
            onClick={() => setLiked(!liked)}
          />
        </SocialInteraction>
        <SocialInteraction middle="true">
          <StyledIcon icon={faComment} />
        </SocialInteraction>
        <SocialInteraction>
          <StyledIcon icon={faShare} />{" "}
        </SocialInteraction>
      </SocialInteractionContainer>
      <CommentContainer>
        <UserImageContainer alt="user" src={UserImage} />
        <CommentInput placeholder="Write a comment..." />
        <CommentButton>Post</CommentButton>
      </CommentContainer>
    </>
  );
};

export default SocialInteractions;

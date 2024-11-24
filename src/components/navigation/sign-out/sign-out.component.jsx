import React, { useContext } from "react";
import {
  IconStyled,
  SignOutButton,
  SignOutContainer,
  SignOutSpan,
} from "./sign-out.styles";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { signOutUser } from "../../../utils/firebase.utils";
import { UserContext } from "../../../contexts/user.context";

const SignOut = () => {
  const { setUser } = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser();
    setUser({});
  };

  return (
    <SignOutContainer>
      <SignOutSpan>Sign Out</SignOutSpan>
      <SignOutButton onClick={handleSignOut}>
        <IconStyled icon={faSignOut} />
      </SignOutButton>
    </SignOutContainer>
  );
};

export default SignOut;

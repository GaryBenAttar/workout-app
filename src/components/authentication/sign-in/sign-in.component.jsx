import React from "react";

import {
  SignInButton,
  SignInButtonContainer,
  SignInForm,
  SignInFormContainer,
  SignInFormHeading,
  SignInFormInput,
  SignInWithGoogleButton,
} from "./sign-in.styles";
import { useSignIn } from "./hooks/useSignIn.hook";

const SignIn = () => {
  const { userCredentials, setUserCredentials, handleSignIn } = useSignIn();

  return (
    <SignInFormContainer>
      <SignInFormHeading>You already have an account?</SignInFormHeading>
      <SignInForm>
        <SignInFormInput
          label="Email"
          onChange={(event) =>
            setUserCredentials((previousState) => ({
              ...previousState,
              email: event.target.value,
            }))
          }
        />
        <SignInFormInput
          label="Password"
          onChange={(event) =>
            setUserCredentials((previousState) => ({
              ...previousState,
              password: event.target.value,
            }))
          }
        />
        <SignInButtonContainer>
          <SignInButton
            onClick={(event) =>
              handleSignIn(
                event,
                "email-password",
                userCredentials.email,
                userCredentials.password
              )
            }
          >
            Sign In
          </SignInButton>
          <SignInWithGoogleButton
            buttonType="blue"
            onClick={(event) => handleSignIn(event, "google")}
          >
            Sign In With Google
          </SignInWithGoogleButton>
        </SignInButtonContainer>
      </SignInForm>
    </SignInFormContainer>
  );
};

export default SignIn;

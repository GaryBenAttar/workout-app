import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SignInButton,
  SignInButtonContainer,
  SignInForm,
  SignInFormContainer,
  SignInFormHeading,
  SignInFormInput,
  SignInWithGoogleButton,
} from "./sign-in.styles";
import { UserContext } from "../../contexts/user.context";
import {
  createUserDocumentFromAuth,
  fetchData,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const signInResult = useRef({});
  const data = useRef([]);

  useEffect(() => {
    fetchData("users")
      .then((result) => (data.current = result))
      .catch((error) => console.log(error));
  }, []);

  const handleSignIn = async (event, method) => {
    event.preventDefault();

    if (method === "google") signInResult.current = await signInWithGoogle();
    if (method === "email-password")
      signInResult.current = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

    !data.current.find((obj) => obj.uid === signInResult.current.uid) &&
      createUserDocumentFromAuth(signInResult.current);

    setUser(
      data.current.find((obj) => obj.uid === signInResult.current.uid) || {
        uid: signInResult.current.uid,
        createdAt: signInResult.current.createdAt,
        fullname: signInResult.current.displayName,
        photo: signInResult.current.photoURL,
        workouts: [],
      }
    );

    navigate("/");
  };

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
            onClick={(event) => handleSignIn(event, "email-password")}
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

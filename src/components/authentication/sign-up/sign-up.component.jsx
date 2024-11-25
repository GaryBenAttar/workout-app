import { useState } from "react";
import {
  SignUpButton,
  SignUpForm,
  SignUpFormContainer,
  SignUpFormHeading,
  SignUpFormInput,
} from "./sign-up.styles";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";

const SignUp = () => {
  const emptySignUpDetails = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signUpDetails, setSignUpDetails] = useState(emptySignUpDetails);

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        signUpDetails.email,
        signUpDetails.password
      );
      await createUserDocumentFromAuth(user, {
        username: signUpDetails.username,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create a user, email already in use");
      }
      console.log("user creation failed", error);
    }

    setSignUpDetails(emptySignUpDetails);
  };

  return (
    <SignUpFormContainer>
      <SignUpFormHeading>You do not have an account yet?</SignUpFormHeading>
      <SignUpForm>
        <SignUpFormInput
          required
          label="Username"
          value={signUpDetails.username}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              username: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Email"
          type="email"
          value={signUpDetails.email}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              email: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Password"
          type="password"
          value={signUpDetails.password}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              password: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Confirm Password"
          type="password"
          value={signUpDetails.confirmPassword}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              confirmPassword: event.target.value,
            })
          }
        />
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpFormContainer>
  );
};

export default SignUp;

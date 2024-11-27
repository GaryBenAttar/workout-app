import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../../utils/firebase.utils";

export const useSignUp = () => {
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

      setSignUpDetails(emptySignUpDetails);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create a user, email already in use");
      }
      console.log("user creation failed", error);
    }
  };

  return { signUpDetails, setSignUpDetails, handleSignUp };
};

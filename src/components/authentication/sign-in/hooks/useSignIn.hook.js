import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/user.context";
import {
  createUserDocumentFromAuth,
  fetchData,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../../../utils/firebase.utils";

export const useSignIn = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const signInResult = useRef({});
  const data = useRef([]);

  useEffect(() => {
    fetchData("users")
      .then((result) => (data.current = result))
      .catch((error) => console.log(error));
  }, []);

  const handleSignIn = async (event, method, email, password) => {
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
        username: signInResult.username,
        fullname: signInResult.current.displayName,
        photo: signInResult.current.photoURL,
        workouts: [],
      }
    );

    navigate("/");
  };

  return { userCredentials, setUserCredentials, handleSignIn };
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnq0WUsZAJRtK7M8uM8gbvE4u904ppOqM",
  authDomain: "workout-app-3fb0c.firebaseapp.com",
  projectId: "workout-app-3fb0c",
  storageBucket: "workout-app-3fb0c.firebasestorage.app",
  messagingSenderId: "572773974047",
  appId: "1:572773974047:web:25bf4c20e65050e0d1552a",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => result.user)
    .catch((error) => console.log(`Error handling Google Sign In: ${error}`));
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error during sign up:", error.message);
  }
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, uid, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        fullname: displayName,
        email,
        createdAt,
        uid,
        photo: photoURL,
        workouts: [],
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }
};

export const updateUser = async (userID, updatedData) => {
  try {
    const workoutRef = doc(db, "users", userID); // Get a reference to the workout document
    await updateDoc(workoutRef, updatedData); // Update the document
    console.log("Workout updated successfully!");
  } catch (error) {
    console.error("Error updating workout:", error);
  }
};

export const fetchData = async (myCollection) => {
  const querySnapshot = await getDocs(collection(db, myCollection)); // Replace 'your-collection-name'
  const dataArray = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return dataArray;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => result.user)
    .catch((error) => console.log(error));
};

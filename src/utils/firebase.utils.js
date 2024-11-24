// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
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

export const addUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      uid: user.uid,
      createdAt: new Date(),
      fullname: user.displayName,
      photo: user.photoURL,
      workouts: [],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
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

export const updateUser = async (userID, updatedData) => {
  try {
    const workoutRef = doc(db, "workouts", userID); // Get a reference to the workout document
    await updateDoc(workoutRef, updatedData); // Update the document
    console.log("Workout updated successfully!");
  } catch (error) {
    console.error("Error updating workout:", error);
  }
};

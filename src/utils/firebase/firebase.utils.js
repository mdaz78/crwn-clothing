import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZjNWlsUsG7NbnWBwqShDd1MOtwK1_nVs",
  authDomain: "crwn-337310.firebaseapp.com",
  projectId: "crwn-337310",
  storageBucket: "crwn-337310.appspot.com",
  messagingSenderId: "462215152998",
  appId: "1:462215152998:web:b7fe4f7b2344d525e7f4a7",
  measurementId: "G-7V12YPW8XK",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userDocRef;
};

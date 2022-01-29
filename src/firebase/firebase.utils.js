import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for database
import 'firebase/compat/auth'; // for auth

const config = {
  apiKey: 'AIzaSyBZjNWlsUsG7NbnWBwqShDd1MOtwK1_nVs',
  authDomain: 'crwn-337310.firebaseapp.com',
  projectId: 'crwn-337310',
  storageBucket: 'crwn-337310.appspot.com',
  messagingSenderId: '462215152998',
  appId: '1:462215152998:web:b7fe4f7b2344d525e7f4a7',
  measurementId: 'G-7V12YPW8XK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

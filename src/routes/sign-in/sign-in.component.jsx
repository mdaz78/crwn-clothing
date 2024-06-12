import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooglUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;

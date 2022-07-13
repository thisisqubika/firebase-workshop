import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './index';

const provider = new GoogleAuthProvider();

export const onLoginGmail = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('credential:', credential)
    })
};

export const onGetProfile = () => {
  const user = auth.currentUser;
  return user;
};

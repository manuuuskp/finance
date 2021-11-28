import app, { db } from "../config/firebase-config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

const auth = getAuth(app);
const USERS = "users";

export const setDocument = async (docRef, docData) => {
  await setDoc(docRef, docData);
};

export const getDocument = (docRef) => {
  return await getDoc(docRef);
};

export const createUser = (user, uid = auth.currentUser.uid) => {
  const docRef = doc(db, USERS, uid);
  const userData = {
    ...user,
    created: serverTimestamp(),
    updated: serverTimestamp(),
  };
  setDocument(docRef, userData);
};

export function socialMediaAuth(provider) {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("#####" + token);
      // The signed-in user info.
      const user = result.user;
      user.apiAccessToken = token;
      return user;
    })
    .catch((er) => {
      console.log(er);
      return null;
    });
}

export const socialSignIn = async () => {
  const res = await socialMediaAuth(GoogleAuthProvider);
  if (!res) {
    return null;
  }

  const userRef = doc(db, USERS, res.uid);
  const userRefSnap = await getDocument(userRef);
  const user = {
    user_id: res.uid,
    full_name: res.displayName,
    signin_method: "google",
    avatar_url: res.photoURL,
    email: res.email,
  };

  if (!userRefSnap.exists()) {
    await createUser(user, res.uid);
  }
  return user;
};

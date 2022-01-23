import app, { db } from "../config/firebase-config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

const auth = getAuth(app);
const USERS = "users";
const PARTY = "party";
const LOAN = "loan";

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

export const socialMediaAuth = (provider) => {
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
};

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

export const createParty = (party, uid = uuid()) => {
  const docRef = doc(db, USERS, auth.currentUser.uid, PARTY, uid);
  const partyData = {
    ...party,
    created: serverTimestamp(),
    updated: serverTimestamp(),
  };
  setDocument(docRef, partyData);
};

export const createLoan = (loan, uid = uuid()) => {
  const docRef = doc(db, USERS, auth.currentUser.uid, LOAN, uid);
  const loanData = {
    ...loan,
    created: serverTimestamp(),
    updated: serverTimestamp(),
  };
  setDocument(docRef, loanData);
};

// uid => unique ID(primary key) of that particular user
export const getUser = async (uid) => {
  const userRef = doc(db, USERS, uid);
  const userRefSnap = await getDocument(userRef);
  return userRefSnap.data();
};

export const getUserAll = async () => {
  const userData = [];
  const userAllRefSnap = await getDocs(collection(db, USERS));
  userAllRefSnap.forEach((doc) => {
    userData.push(doc.data());
  });
  return userData;
};

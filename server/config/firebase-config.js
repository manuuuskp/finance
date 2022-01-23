import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxvKXKLLmBrA25NnRok50UsaQR9AgEciI",
  authDomain: "finance-8a763.firebaseapp.com",
  projectId: "finance-8a763",
  storageBucket: "finance-8a763.appspot.com",
  messagingSenderId: "33844244103",
  appId: "1:33844244103:web:951a3e707e027160e85222"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;

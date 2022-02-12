import app, { db } from "../config/firebase-config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  WriteBatch,
  writeBatch,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

const auth = getAuth(app);
const USERS = "users";

export const setDocument = async (docRef, docData) => {
  await setDoc(docRef, docData);
};

export const getDocument = (docRef) => {
  return getDoc(docRef);
};

// export const createUser = (user, uid = auth.currentUser.uid) => {
//   const docRef = doc(db, USERS, uid);
//   const userData = {
//     ...user,
//     created: serverTimestamp(),
//     updated: serverTimestamp(),
//   };
//   setDocument(docRef, userData);
// };

export const socialMediaAuth = (provider) => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("#####" + token);
      // The signed-in user info.
      const user = result.user;
      //user.apiAccessToken = token;
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
    //await createUser(user, res.uid);
  }
  return user;
};

// export const createParty = (party, uid = uuid()) => {
//   const docRef = doc(db, USERS, auth.currentUser.uid, PARTY, uid);
//   const partyData = {
//     ...party,
//     created: serverTimestamp(),
//     updated: serverTimestamp(),
//   };
//   setDocument(docRef, partyData);
// };

// export const createLoan = (loan, uid = uuid()) => {
//   const docRef = doc(db, USERS, auth.currentUser.uid, LOAN, uid);
//   const loanData = {
//     ...loan,
//     created: serverTimestamp(),
//     updated: serverTimestamp(),
//   };
//   setDocument(docRef, loanData);
// };


export const insertDocument = async (tableName, data, opt_uuid) => {
  const docRef = doc(db, tableName, opt_uuid || uuid());
  const updatedData = {
    ...data,
    created: serverTimestamp(),
    updated: serverTimestamp(),
  };
  await setDoc(docRef, updatedData);
};

export const findDocument = async (tableName, id) => {
  const docRef = doc(db, tableName, id);
  const record = await getDoc(docRef);
  return record.data();
};

export const findAllDocuments = async (tableName) => {
  const data = [];
  const dataSnap = await getDocs(collection(db, tableName));
  dataSnap.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

export const updateDocument = async (tableName, id, data) => {
  const docRef = doc(db, tableName, id);
  const updatedData = {
    ...data,
    updated: serverTimestamp(),
  };
  await updateDoc(docRef, updatedData)
}

export const deleteDocument = async (tableName, id) => {
  const docRef = doc(db, tableName, id);
  await deleteDoc(docRef);
}

export const searchDocuments = async (tableName, whereList, orderBy, limit, offset) => {
  const queryConstraints = [];
  const data = [];
  whereList.forEach(condition => { queryConstraints.push(where(condition.columnName, condition.operator, condition.value)) });
  const querySnapshot = await getDocs(query(collection(db, tableName), ...queryConstraints));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

export const bulkOperations = async (tableName, bulkData) => {

  const batch = writeBatch(db);
  
  if (bulkData['insert']) {
    let insertList = bulkData['insert'];
    insertList.forEach(insertData => {
      let docRef = doc(db, tableName, uuid());
      let updatedData = {
        ...insertData,
        created: serverTimestamp(),
        updated: serverTimestamp(),
      };
      batch.set(docRef, updatedData);
    })
  }

  if (bulkData['update']) {
    let updateList = bulkData['update'];
    updateList.forEach(updateData => {
      const docRef = doc(db, tableName, updateData.id);
      const updatedData = {
        ...updateData,
        updated: serverTimestamp(),
      };
      batch.update(docRef, updatedData)
    })
  }

  if (bulkData['delete']) {
    let deleteList = bulkData['delete'];
    deleteList.forEach(deleteData => {
      const docRef = doc(db, tableName, deleteData.id);
      batch.delete(docRef)
    })
  }

  return batch.commit();

}
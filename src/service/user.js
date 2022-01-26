import { deleteDocument, findAllDocuments, findDocument, insertDocument, updateDocument } from "../../server/services/firebase-utility";

const USERS = "users";

export const insert = async (userData) => {
    await insertDocument(USERS, userData)
};

export const find = async (uid) => {
    return await findDocument(USERS, uid)
};

export const findAll = async () => {
    return findAllDocuments(USERS);
};

export const update = async (id, userData) => {
    await updateDocument(USERS, id, userData);
};

export const deleteRecord = async (id) => {
    await deleteDocument(USERS, id);
}

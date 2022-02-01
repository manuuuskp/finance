import { deleteDocument, findAllDocuments, findDocument, insertDocument, updateDocument } from "../../server/services/firebase-utility";

const TABLE_NAME = "loans";

export const insert = async (data, uuid) => {
    await insertDocument(TABLE_NAME, data, uuid)
};

export const find = async (uid) => {
    return await findDocument(TABLE_NAME, uid)
};

export const findAll = async () => {
    return findAllDocuments(TABLE_NAME);
};

export const update = async (id, data) => {
    await updateDocument(TABLE_NAME, id, data);
};

export const deleteRecord = async (id) => {
    await deleteDocument(TABLE_NAME, id);
}

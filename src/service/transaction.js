import {
  bulkOperations,
  findAllDocuments,
  insertDocument,
  searchDocuments,
} from "../../server/services/firebase-utility";

const TABLE_NAME = "transaction";

export const insert = async (data) => {
  await insertDocument(TABLE_NAME, data);
};

export const findAll = async () => {
  return findAllDocuments(TABLE_NAME);
};

export const search = async (whereList) => {
  return searchDocuments(TABLE_NAME, whereList);
}

export const bulkSave = async (bulkData) => {
  return bulkOperations(TABLE_NAME, bulkData)
}
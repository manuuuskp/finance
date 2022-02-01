import {
  findAllDocuments,
  insertDocument,
} from "../../server/services/firebase-utility";

const TABLE_NAME = "transaction";

export const insert = async (data) => {
  await insertDocument(TABLE_NAME, data);
};

export const findAll = async () => {
  return findAllDocuments(TABLE_NAME);
};

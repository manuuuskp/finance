import { searchDocuments } from "../../server/services/firebase-utility";
import * as loanService from "./loan"
import * as transactionService from "./transaction"

export const getData = async (defaultData) => {
    const whereCondition = {
        columnName: "loanType",
        operator: "==",
        value: '4'
    };
    return joinData(whereCondition,defaultData)
};

function joinData(whereCondition,defaultData) {
    return loanService.search([whereCondition]).then(loanData => {
        let loanIds = [];
        loanData.forEach(loan => loanIds.push(loan.id));
        let transactionWhereCondition = {
            columnName: "loanId",
            operator: "in",
            value: loanIds
        };
        let records = new Map();
        loanIds.forEach(loan => {
            records.set(loan, { id:loan,loanId: loan,...defaultData });
        })
        return makeData(transactionWhereCondition,records);
    });
}

function makeData(transactionWhereCondition,records) {
    return transactionService.search([transactionWhereCondition]).then(transactions => {
        transactions.forEach(transaction => {
            if (records.get(transaction.loanId)) {
                records.get(transaction.loanId)[transaction.key] = transaction.amount;
            } else {
                records.set(transaction.loanId, { loanId: transaction.loanId });
                records.get(transaction.loanId)[transaction.key] = transaction.amount;
            }
        });
        let dataList = [];
        records.forEach(record => { dataList.push(record); });
        return dataList;
    });
}

export const bulkSave = (transactionData) => {
    return transactionService.bulkSave(transactionData);
}
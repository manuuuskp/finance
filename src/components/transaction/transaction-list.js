import React, { useEffect, useState } from "react";
import * as transactionService from "../../service/transaction";

const TransactionList = () => {
  const [transactions , setTransactions] = useState([]);

  useEffect(async () => {
    const response  = await transactionService.findAll();
    setTransactions(response);
  }, []);

  return (
    <>
      <table className="table table-light table-hover caption-top">
        <caption>List of Transaction</caption>
        <thead className="table-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Amount</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Transaction Date</th>
            <th scope="col">Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {[...transactions].map((transactionData, index) => (
            <tr key={transactionData.id}>
              <th scope="row">{index}</th>
              <td>{transactionData.sender}</td>
              <td>{transactionData.receiver}</td>
              <td>{transactionData.amount}</td>
              <td>{transactionData.transactionType}</td>
              <td>{transactionData.transactionType}</td>
              <td>{transactionData.paymentMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionList;

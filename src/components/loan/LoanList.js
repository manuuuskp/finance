import React, { useEffect, useState } from "react";
import classes from "./LoanList.module.css";
import { useHistory } from 'react-router-dom';
import * as loanSerice from "../../service/loan"

const LoanList = () => {

    const navigate = useHistory();
    const [loans_, setLoans] = useState([]);

    useEffect(() => {
        loanSerice.findAll().then(data => {
            setLoans(data)
        })
    }, [])

    const navigateToDetail = () => {
        navigate.push({ pathname: '/loanDetail', state: { mode: 1 } });
    }

    const onRowClick = (loanId) => {
        navigate.push({ pathname: '/loanDetail', state: { mode: 2, loanId: loanId } });
    }

    return <div className={classes.tableContainer}>
        <table className="table table-light table-hover caption-top">
            <caption>List of Loans</caption>
            <thead className="table-light">
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Borrower</th>
                    <th scope="col">Lender</th>
                    <th scope="col">Loan Amount</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Loan Type</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {[...loans_].map((loanData, index) =>
                    <tr key={loanData.id} onClick={() =>onRowClick(loanData.id)}>
                        <th scope="row">{index}</th>
                        <td>{loanData.borrower}</td>
                        <td>{loanData.lender}</td>
                        <td>{loanData.loanAmount}</td>
                        <td>{loanData.interest}</td>
                        <td>{loanData.loanType}</td>
                        <td>{loanData.status}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <a href="#" className="floatButton" onClick={navigateToDetail}>
            <i className="fa fa-plus floatIcon"></i>
        </a>
    </div>
}

export default LoanList;


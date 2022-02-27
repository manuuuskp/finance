import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import * as loanService from "../../service/loan";
import * as transactionService from "../../service/transaction";
import Modal from "../modal/Modal";

const LoanDetail = (props) => {
  // const navigate = useHistory();
  // const location = useLocation();

  // const mode = location?.state ? location.state.mode : 1;

  const [loanData, setLoanData] = useState({});

  useEffect(() => {
    if (props.mode == 1) {
      return;
    }
    let loanId = props.loanId;
    loanService.find(loanId).then(setLoanData);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoanData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (props.mode == 1) {
      const uid = uuid();
      await transactionService.insert({
        loanId: uid,
        sender: loanData.lender,
        receiver: loanData.borrower,
        amount: loanData.loanAmount,
        transactionType: "principle",
        paymentMode: "cash",
      });
      await loanService.insert(loanData, uid);
      setLoanData({});
      return;
    }
    let loanId = props.loanId;
    loanService.update(loanId, loanData).then(() => navigate.push("/loans"));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    let loanId = props.loanId;
    loanService.deleteRecord(loanId).then(() => navigate.push("/loans"));
  };

  return (
    <Modal onClose={props.onClose}>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="borrower" className="form-label">
            Borrower
          </label>
          <input
            type="text"
            className="form-control"
            id="borrower"
            name="borrower"
            value={loanData.borrower || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lender" className="form-label">
            Lender
          </label>
          <input
            type="text"
            className="form-control"
            id="lender"
            name="lender"
            value={loanData.lender || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="loanAmount" className="form-label">
            Loan Amount
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="loanAmount"
              name="loanAmount"
              value={loanData.loanAmount || ""}
              onChange={handleChange}
            />
            <span className="input-group-text">Rs</span>
          </div>
        </div>
        <div>
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={loanData.status || ""}
            onChange={handleChange}
            aria-label="Default select"
          >
            <option value="1"></option>
            <option value="2">Active</option>
            <option value="3">InActive</option>
            <option value="4">Suspend</option>
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="form-label">
            Interest
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="interest"
              name="interest"
              value={loanData.interest || ""}
              onChange={handleChange}
            />
            <span className="input-group-text">%</span>
          </div>
        </div>
        <div>
          <label htmlFor="loanType" className="form-label">
            Loan Type
          </label>
          <select
            id="loanType"
            name="loanType"
            className="form-select"
            value={loanData.loanType || ""}
            onChange={handleChange}
            aria-label="Default select"
          >
            <option value="1"></option>
            <option value="2">Monthly</option>
            <option value="3">Weekly</option>
            <option value="4">Daily</option>
          </select>
        </div>

        <div>
          <label htmlFor="startDate" className="form-label">
            Loan Amount
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
            value={loanData.startDate || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="form-label">
            Lender
          </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={loanData.endDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          {props.mode == 1 && (
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          )}
          {props.mode != 1 && (
            <div className="d-flex gap-3">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default LoanDetail;

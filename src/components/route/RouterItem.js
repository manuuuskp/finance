import React from "react";
import { Switch, Route } from 'react-router-dom';
import DailyGrid from "../dataEntry/daily-grid";
import Home from "../home/home";
import LoanDetail from "../loan/loan-detail";
import LoanList from "../loan/loan-list";
import TransactionList from "../transaction/transaction-list";
import UserDetail from "../user/user-detail";
import UserList from "../user/user-list";

const RouterItem = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserList} />
        <Route path="/loans" component={LoanList} />
        <Route path="/transaction" component={TransactionList} />
        <Route path="/dailyEntry" component={DailyGrid} />
        <Route path="/contact" component={Home} />
        <Route path="/profile" component={Home} />
        <Route path="/userDetail" component={UserDetail} />
        <Route path="/loanDetail" component={LoanDetail} />
      </Switch>
    </>
  );
};

export default RouterItem;

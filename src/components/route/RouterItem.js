import React from "react";
import { Switch, Route } from 'react-router-dom';
import DailyGrid from "../dataEntry/DailyGrid";
import Home from "../home/Home";
import LoanDetail from "../loan/LoanDetail";
import LoanList from "../loan/LoanList";
import TransactionList from "../transaction/TransactionList";
import UserDetail from "../user/UserDetail";
import UserList from "../user/UserList";

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
      </Switch>
    </>
  );
};

export default RouterItem;

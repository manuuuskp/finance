import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Home from "../home/home";
import LoanDetail from "../loan/loan-detail";
import LoanList from "../loan/loan-list";
import UserDetail from "../user/user-detail";
import UserList from "../user/user-list";
import "./Layout.css";

const Layout = (props) => {
    return <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Finance App</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li className="nav-item"><Link to={'/users'} className="nav-link">Users</Link></li>
                    <li className="nav-item"><Link to={'/loans'} className="nav-link">Loans</Link></li>
                    <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li className="nav-item"><Link to={'/profile'} className="nav-link">Profile</Link></li>
                </ul>
            </div>
        </nav>
        <div id="main">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/users' component={UserList} />
                <Route path='/loans' component={LoanList} />
                <Route path='/contact' component={Home} />
                <Route path='/profile' component={Home} />
                <Route path='/userDetail' component={UserDetail} />
                <Route path='/loanDetail' component={LoanDetail} />
            </Switch>
        </div>
    </div>

};

export default Layout;
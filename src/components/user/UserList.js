import React, { useEffect, useRef, useState } from "react";
import "./UserList.css";
import { useHistory } from "react-router-dom";
import * as userService from "../../service/user";
import UserDetail from "./UserDetail";

const UserList = () => {
  const navigate = useHistory();
  const [userListData, setUserListData] = useState([]);
  const [detailOpen, setDetailOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [mode, setMode] = useState(1);

  useEffect(() => {
    userService.findAll().then((data) => {
      setUserListData(data);
    });
  }, []);

  const navigateToDetail = () => {
    // navigate.push({ pathname: "/userDetail", state: { mode: 1 } });
    setDetailOpen(true);
  };

  const onRowClick = (userId) => {
    // navigate.push({
    //   pathname: "/userDetail",
    //   state: { mode: 2, userId: userId },
    // });
    setUserId(userId);
    setMode(2);
  };

  const onClickDetailClose = () => {
      setDetailOpen(false);
  }

  return (
    <div className="table-container">
      <table className="table table-light table-hover caption-top">
        <caption>List of Users</caption>
        <thead className="table-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Area</th>
            <th scope="col">User Type</th>
            <th scope="col">Guarantor Name</th>
          </tr>
        </thead>
        <tbody>
          {[...userListData].map((userData, index) => (
            <tr key={userData.id} onClick={() => onRowClick(userData.id)}>
              <th scope="row">{index}</th>
              <td>{userData.name}</td>
              <td>{userData.phoneNumber}</td>
              <td>{userData.area}</td>
              <td>{userData.userType}</td>
              <td>{userData.guarantorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#" className="floatButton" onClick={navigateToDetail}>
        <i className="fa fa-plus floatIcon"></i>
      </a>
      {detailOpen && <UserDetail mode={mode} userId={userId} onClose={onClickDetailClose}/>}
    </div>
  );
};

export default UserList;

import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div>
        {props.screenDetail.activeIcon}
        <span className={classes.title}>{props.screenDetail.linkName}</span>
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Header;

import React from "react";
import Button from "../button/Button";
import classes from "./SecondaryHeader.module.css";

const SecondaryHeader = (props) => {
  const searchPlaceholder = `Search ${props.screenData.linkName}`
  return (
    <div className={classes.secondaryHeader}>
      <div>
        <input type="search" className={classes.searchInput} placeholder={searchPlaceholder}/>
      </div>
      <div>
        <Button>Create New</Button>
      </div>
    </div>
  );
};

export default SecondaryHeader;

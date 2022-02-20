import React from "react";
import TransactionIcon from "../../icons/transaction/TransactionIcon";

import classes from "./SidebarHeader.module.css";

const SidebarHeader = () => {
  return (
    <div className={classes.sidebarHeader}>
      <TransactionIcon active={false} />
    </div>
  );
};

export default SidebarHeader;

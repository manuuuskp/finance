import React from "react";
import TransactionIcon from "../../icons/transaction/TransactionIcon";

import classes from "./SidebarFooter.module.css";

const SidebarFooter = () => {
  return (
    <div>
      <hr className={classes.horizonLine} />
      <div className={classes.menuItemContent}>
        <div className={classes.iconContainer}>
          <TransactionIcon active={false} />
        </div>
        <div className={classes.linkLabel}>Settings</div>
      </div>
      <div className={classes.menuItemContent}>
        <div className={classes.iconContainer}>
          <TransactionIcon active={false} />
        </div>
        <div className={classes.linkLabel}>Help & Support</div>
      </div>
    </div>
  );
};

export default SidebarFooter;

import React, {useContext} from "react";
import TransactionIcon from "../../icons/transaction/TransactionIcon";
import drawerContext from "../../../store/drawer-context";

import classes from "./SidebarFooter.module.css";

const SidebarFooter = (props) => {
  const drawerCtx = useContext(drawerContext); 
  return (
    <div>
      <hr className={classes.horizonLine} />
      <div className={classes.menuItemContent}>
        <div className={classes.iconContainer}>
          <TransactionIcon active={false} />
        </div>
        {drawerCtx.isDrawerOpen && <div className={classes.linkLabel}>Settings</div>}
      </div>
      <div className={classes.menuItemContent}>
        <div className={classes.iconContainer}>
          <TransactionIcon active={false} />
        </div>
        {drawerCtx.isDrawerOpen && (
          <div className={classes.linkLabel}>Help & Support</div>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;

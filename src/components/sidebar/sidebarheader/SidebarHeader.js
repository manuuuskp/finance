import React, { useContext } from "react";
import HamburgerIcon from "../../icons/hamburger/HamburgerIcon";
import drawerContext from "../../../store/drawer-context";

import classes from "./SidebarHeader.module.css";

const SidebarHeader = () => {
  const drawerCtx = useContext(drawerContext);
  const ChangeDrawerState = () => {
    drawerCtx.setDrawerState();
  }
  return (
    <div className={classes.sidebarHeader}>
      <HamburgerIcon changeDrawer={ChangeDrawerState}/>
    </div>
  );
};

export default SidebarHeader;

import React, { useContext } from "react";
import drawerContext from "../../store/drawer-context";

import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  const drawerCtx = useContext(drawerContext);
  const sideDrawerClass = drawerCtx.isDrawerOpen
    ? `${classes.sidebar}`
    : `${classes.sidebar} ${classes.sidebarclose}`;
  return <div className={sideDrawerClass}>{props.children}</div>;
};

export default Sidebar;

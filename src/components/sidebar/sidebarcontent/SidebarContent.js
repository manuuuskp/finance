import React from "react";
import SidebarFooter from "../sidebarfooter/SidebarFooter";
import SidebarHeader from "../sidebarheader/SidebarHeader";
import SidebarMain from "../sidebarmain/SidebarMain";

import classes from "./SidebarContent.module.css";

const SidebarContent = (props) => {
  return <div className={classes.SidebarContent}>
    <div>
      <SidebarHeader />
    </div>
    <div className={classes.sidebarMain}>
      <SidebarMain screenData={props.screenData}/>
    </div>
    <div className={classes.sidebarFooter}>
      <SidebarFooter />
    </div>
  </div>
}

export default SidebarContent;
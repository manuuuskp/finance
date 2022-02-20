import React, { useState } from "react";
import drawerContext from "./drawer-context";

const DrawerContextProvider = (props) => {
  const [sidebarOpen, setSideBarOpen] = useState(true);

  const changeDrawerState = () => {
    setSideBarOpen((prevState) => !prevState);
  };

  const initialValue = {
    isDrawerOpen: sidebarOpen,
    setDrawerState: changeDrawerState,
  };
  return (
    <drawerContext.Provider value={initialValue}>
      {props.children}
    </drawerContext.Provider>
  );
};

export default DrawerContextProvider;

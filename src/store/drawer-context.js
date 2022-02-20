import React from "react";

const drawerContext = React.createContext({
  isDrawerOpen: true,
  setDrawerState: () => {},
});

export default drawerContext;

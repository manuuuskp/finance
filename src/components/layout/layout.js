import React, {useState} from "react";
import ContentArea from "../contentarea/ContentArea";
import Header from "../header/Header";
import DashboardIcon from "../icons/dashboard/DashboardIcon";
import RouterItem from "../route/RouterItem";
import SecondaryHeader from "../secondaryheader/SecondaryHeader";
import Sidebar from "../sidebar/Sidebar";
import SidebarContent from "../sidebar/sidebarcontent/SidebarContent";

import classes from "./Layout.module.css";

const Layout = () => {
  const[screenData, setScreenData] = useState({
    activeIcon: <DashboardIcon active={true} />,
    linkName: "Dashboard",
  }); 
  const getScreenTitle = (activeData) => {
    setScreenData(activeData);
  }
  return (
    <div className={classes.layout}>
      <div>
        <Sidebar>
          <SidebarContent screenData={getScreenTitle}/>
        </Sidebar>
      </div>
      <div className={classes.itemRight}>
        <Header screenDetail={screenData}/>
        <SecondaryHeader screenData={screenData} />
        <ContentArea>
            <RouterItem />
        </ContentArea>
      </div>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DailyEntryIcon from "../../icons/dailyentry/DailyEntryIcon";
import DashboardIcon from "../../icons/dashboard/DashboardIcon";
import LoanIcon from "../../icons/loan/LoanIcon";
import TransactionIcon from "../../icons/transaction/TransactionIcon";
import UserIcon from "../../icons/users/UserIcon";

import classes from "./SidebarMain.module.css";

const linkItem = [
  {
    isActive: true,
    icon: <DashboardIcon active={false} />,
    activeIcon: <DashboardIcon active={true} />,
    link: "/",
    linkName: "Dashboard",
    key: "Dashboard",
  },
  {
    isActive: false,
    icon: <UserIcon active={false} />,
    activeIcon: <UserIcon active={true} />,
    link: "/users",
    linkName: "Users",
    key: "Users",
  },
  {
    isActive: false,
    icon: <LoanIcon active={false} />,
    activeIcon: <LoanIcon active={true} />,
    link: "/loans",
    linkName: "Loans",
    key: "Loans",
  },
  {
    isActive: false,
    icon: <TransactionIcon active={false} />,
    activeIcon: <TransactionIcon active={true} />,
    link: "/transaction",
    linkName: "Transaction",
    key: "Transaction",
  },
  {
    isActive: false,
    icon: <DailyEntryIcon active={false} />,
    activeIcon: <DailyEntryIcon active={true} />,
    link: "/dailyEntry",
    linkName: "Daily Entry",
    key: "Daily Entry",
  },
];

const SidebarMain = (props) => {
  const [sidebarItem, setSidebarItem] = useState(linkItem);

  const setActiveItem = (itemKey) => {
    const cloneLinkItems = [...sidebarItem];
    cloneLinkItems.forEach((item) => {
      item.isActive = false;
      if (item.key === itemKey) {
        item.isActive = true;
        props.screenData(item);
      }
    });
    setSidebarItem(cloneLinkItems);
  };

  return (
    <ul className={classes.sidebarList}>
      {sidebarItem.map((item) => {
        const sideMarkerClass = item.isActive
          ? `${classes.sideMarker} ${classes.activeSideMarker}`
          : classes.sideMarker;
        const linkLabelClass = item.isActive
          ? `${classes.linkLabel} ${classes.activeLinkLabel}`
          : classes.linkLabel;

        return (
          <li key={item.key} onClick={setActiveItem.bind(null, item.key)}>
            <Link to={item.link} className={linkLabelClass}>
              <div className={classes.menuItemContent}>
                <div className={sideMarkerClass}></div>
                <div className={classes.iconContainer}>
                  {item.isActive ? item.activeIcon : item.icon}
                </div>
                <div>{item.linkName}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMain;

import React from "react";

import classes from "./DashboardIcon.module.css";

const DashboardIcon = (props) => {
  const iconActiveClass = props.active ? classes.active : classes.notActive;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconActiveClass}
    >
      <path
        opacity=".4"
        d="M15.26 4h2.71A2.04 2.04 0 0 1 20 6.048V8.78a2.04 2.04 0 0 1-2.03 2.048h-2.71a2.04 2.04 0 0 1-2.03-2.048V6.048A2.04 2.04 0 0 1 15.26 4z"
        fill="#5061FF"
      />
      <path
        d="M8.74 13.172a2.04 2.04 0 0 1 2.03 2.048v2.732A2.04 2.04 0 0 1 8.74 20H6.03A2.04 2.04 0 0 1 4 17.952V15.22a2.04 2.04 0 0 1 2.03-2.048h2.71zm9.23 0A2.04 2.04 0 0 1 20 15.22v2.732A2.04 2.04 0 0 1 17.97 20h-2.71a2.04 2.04 0 0 1-2.03-2.048V15.22a2.04 2.04 0 0 1 2.03-2.048h2.71zM8.74 4a2.04 2.04 0 0 1 2.03 2.048V8.78a2.04 2.04 0 0 1-2.03 2.048H6.03A2.04 2.04 0 0 1 4 8.78V6.048A2.04 2.04 0 0 1 6.03 4h2.71z"
        fill="#5061FF"
      />
    </svg>
  );
};

export default DashboardIcon;

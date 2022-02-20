import React from "react";

// import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  const iconActiveClass = props.active ? classes.active : "";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconActiveClass}
      onClick={props.changeDrawer}
    >
      <path
        opacity=".4"
        d="M15.725 3h-7.45C5.574 3 4 4.582 4 7.293v9.183c0 2.755 1.573 4.302 4.276 4.302h7.45c2.745 0 4.274-1.547 4.274-4.302V7.293C20 4.583 18.471 3 15.725 3z"
        fill="#919CAA"
      />
      <path
        d="M8.516 15.213h6.969a.697.697 0 0 1 .622.703.696.696 0 0 1-.622.693h-6.97a.69.69 0 0 1-.666-.32.706.706 0 0 1 .667-1.076zm6.969-4.054a.695.695 0 0 1 0 1.388h-6.97a.694.694 0 0 1 0-1.388h6.97zm-4.313-4.026c.384 0 .695.311.695.693a.697.697 0 0 1-.695.703H8.516a.694.694 0 0 1 0-1.387v-.009h2.656z"
        fill="#919CAA"
      />
    </svg>
  );
};

export default HamburgerIcon;

import React from "react";

import classes from "./ContentArea.module.css";

const ContentArea = (props) => {
  return <div className={classes.contentArea}>{props.children}</div>;
};

export default ContentArea;

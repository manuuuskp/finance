import React from "react";

import classes from "./ReportIcon.module.css";

const ReportIcon = (props) => {
  const iconActiveClass = props.active ? classes.active : "";
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
        d="M10.522 6.844c.04.083.068.172.08.263l.223 3.312.11 1.665c.001.171.028.341.08.505a.834.834 0 0 0 .804.505l5.326-.349a.879.879 0 0 1 .62.24.848.848 0 0 1 .255.487l.01.112c-.221 3.052-2.463 5.597-5.508 6.254-3.046.657-6.169-.73-7.673-3.41a6.571 6.571 0 0 1-.797-2.517A4.814 4.814 0 0 1 4 13.122c-.005-3.272 2.325-6.1 5.586-6.782a.873.873 0 0 1 .935.504z"
        fill="#919CAA"
      />
      <path
        opacity=".4"
        d="M12.696 4c3.648.093 6.714 2.717 7.304 6.25l-.006.026-.016.038.002.104a.64.64 0 0 1-.153.378.662.662 0 0 1-.37.217l-.087.012-6.145.398a.734.734 0 0 1-.56-.181.706.706 0 0 1-.23-.43l-.413-6.136a.099.099 0 0 1 0-.064.628.628 0 0 1 .207-.444.652.652 0 0 1 .467-.167z"
        fill="#919CAA"
      />
    </svg>
  );
};

export default ReportIcon;

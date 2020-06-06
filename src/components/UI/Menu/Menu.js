import React from "react";
import classes from "./Menu.module.scss";
import { Link } from "react-router-dom";

export const Menu = (props) => {
  const animation = () => {
    let className = "page";
    if (props.isActive === true) {
      className += "menu-active";
      console.log("printaj");
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.header_links_container}>
          <Link to="/tracker">
            <span>Home</span>
          </Link>
          <span>About</span>
          <span>ICO</span>
          <span>Development</span>
        </div>
      </div>
    </div>
  );
};

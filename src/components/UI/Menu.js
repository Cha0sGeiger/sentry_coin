import React from "react";
import classes from "./Menu.module.scss";

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
          <span>Home</span>
          <span>About</span>
          <span>ICO</span>
          <span>Development</span>
        </div>
      </div>
    </div>
  );
};

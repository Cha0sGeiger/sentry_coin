import React from 'react';
import classes from './Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu = ({ state }) => {
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.header_links_container}>
          <ul>
            <Link to="/tracker">
              <li>About us</li>
            </Link>
            <Link to="/tracker">
              <li>Development</li>
            </Link>
            <Link to="/tracker">
              <li>ICO</li>
            </Link>
            <Link to="/tracker">
              <li>Home</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

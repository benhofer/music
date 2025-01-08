import React, { useState } from "react";
import styles from "../assets/css/components/browselinks.module.css";
import { NavLink } from "react-router-dom";

function BrowseLinks(props) {
  return (
    <div className='browse-links' style={{ flexWrap: "wrap" }}>
      <ul className={styles.browse_links}>
        <li>
          <span
            className={`${styles.browse_link} subtitle2`}
            onClick={() => props.setShowCurious()}
          >
            About
          </span>
        </li>{" "}
        <li>
          <NavLink className={styles.browse_link} to={"/app/browse?filter="}>
            Shows
          </NavLink>
        </li>{" "}
        <li>
          <NavLink className={styles.browse_link} to={"/app/browse?filter="}>
            Blog
          </NavLink>
        </li>{" "}
        <li>
          <NavLink className={styles.browse_link} to={"/app/browse?filter="}>
            Videos
          </NavLink>
        </li>{" "}
        <li>
          <NavLink className={styles.browse_link} to={"/app/browse?filter="}>
            Support
          </NavLink>
        </li>{" "}
      </ul>
    </div>
  );
}

export default BrowseLinks;

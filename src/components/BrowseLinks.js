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
          <a
            className={styles.browse_link}
            href='https://www.patreon.com/benjaminhofer'
            target='_blank'
            rel='noreferrer'
          >
            Patreon
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://benhofer.bandcamp.com'
            target='_blank'
            rel='noreferrer'
          >
            Music
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://www.instagram.com/benjaminhofer'
            target='_blank'
            rel='noreferrer'
          >
            Videos
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://www.themusicofbenjaminhofer.com'
            target='_blank'
            rel='noreferrer'
          >
            Sign Up
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://us11.list-manage.com/contact-form?u=6a351b2bd64ec3d2dea2428f3&form_id=7755296797aecc08770d09e7fcc41727'
            target='_blank'
            rel='noreferrer'
          >
            Contact
          </a>
        </li>{" "}
      </ul>
    </div>
  );
}

export default BrowseLinks;

import React from "react";
import styles from "../assets/css/components/browselinks.module.css";
import { NavLink } from "react-router-dom";

function BrowseLinks(props) {
  return (
    <div className='browse-links' style={{ flexWrap: "wrap" }}>
      <ul className={styles.browse_links}>
        <li>
          <NavLink
            className={styles.browse_link}
            to={"/app/about"}
            onClick={() => {
              props.setColorClass("blue");
              props.setBgOpacity(0.1);
            }}
          >
            About
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            className={styles.browse_link}
            to={"/app/shows"}
            onClick={() => {
              props.setColorClass("red");
              props.setBgOpacity(0.1);
            }}
          >
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
            Bandcamp
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://www.instagram.com/benjaminhofer'
            target='_blank'
            rel='noreferrer'
          >
            Instagram
          </a>
        </li>{" "}
        <li>
          <a
            className={styles.browse_link}
            href='https://gmail.us11.list-manage.com/subscribe?u=6a351b2bd64ec3d2dea2428f3&id=051a8a4d80'
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

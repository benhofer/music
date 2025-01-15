import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Shows from "./pages/Shows";
import BrowseLinks from "./components/BrowseLinks";
import styles from "./assets/css/pages/app.module.css";
import "./assets/css/global/main.css";
import "./assets/css/global/typography.css";
import "./assets/css/global/colors.css";
import "./assets/css/global/grid.css";
import "./assets/css/utilities/util.css";
import "./assets/css/objects/objects.css";
import { NavLink } from "react-router-dom";
import Gels from "./components/Gels";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
// import cross from "./assets/img/cross.svg";
import coverImg from "./assets/img/cover-img.jpg";

const browseLinks = [
  {
    id: "author",
    name: "Author",
  },
  {
    id: "collection",
    name: "Collection",
  },
  {
    id: "work",
    name: "Work",
  },
];

export default function App() {
  const [engagement, setEngagement] = useState("welcome");
  const [colorClass, setColorClass] = useState("gold");
  const [bgImg] = useState({ src: coverImg, alt: "Benjamin Hofer" });
  const [navOn, setNavOn] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(1);
  const location = document.location.href;

  useEffect(() => {
    if (location.endsWith("app")) {
      setColorClass("gold");
      setBgOpacity(1);
    }
  }, [setColorClass, setBgOpacity, location]);

  return (
    <Router>
      <Gels
        color={colorClass}
        engagement={engagement}
        img={bgImg}
        bgOpacity={bgOpacity}
      />

      <div id='main' className={`main`} onClick={() => setNavOn(false)}>
        <header className={`${styles.header} app-header home`}>
          <div>
            <NavLink
              to={"/app"}
              onClick={() => {
                setColorClass("gold");
                setBgOpacity(1);
              }}
              style={{ textDecoration: "none" }}
            >
              <span className={`${styles.subheader}`}>The Music of</span>
              <h1>BENJAMIN HOFER</h1>
            </NavLink>
          </div>
        </header>
        <Routes>
          <Route
            exact
            path='/app'
            element={<Navigate to='/app' replace />}
          ></Route>
          <Route
            path='/app/about'
            element={
              <About
                setColor={(c) => setColorClass(c)}
                setBgOpacity={(o) => setBgOpacity(o)}
                setEngagement={setEngagement}
              />
            }
          />
          <Route
            path='/app/shows'
            element={
              <Shows
                setColor={(c) => setColorClass(c)}
                setBgOpacity={(o) => setBgOpacity(o)}
                setEngagement={setEngagement}
              />
            }
          />
        </Routes>
      </div>

      <div className={styles.browse_section}>
        <BrowseLinks
          navOn={navOn}
          setNavOn={(b) => setNavOn(b)}
          links={browseLinks}
          heading={true}
          setColorClass={(c) => setColorClass(c)}
          setBgOpacity={(o) => setBgOpacity(o)}
        />
      </div>
      <footer
        className={`${styles.footer} page-footer`}
        onClick={() => setNavOn(false)}
      >
        <div className='lower-footer'>
          <div className='u-text-center'>
            Let everything that has breath praise the LORD! Praise the LORD!{" "}
            <i style={{ display: "block" }}>Psalm 150:6</i>
          </div>
        </div>
      </footer>
    </Router>
  );
}

import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HashLink className={styles.logo} to="/">
          <img src={"/images/logo.png"} alt="Little Lemon logo" />
        </HashLink>
        <button
          className={styles.hamburger}
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className={isNavExpanded ?  `${styles.nav}  ${styles.navActive}` : styles.nav}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

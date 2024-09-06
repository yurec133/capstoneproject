import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import styles from "./footer.module.css";

const contacts = [
  { icon: faLocationDot, info: "19/20 Royal Hibernian Way" },
  { icon: faPhone, info: "01-905 8777" },
  { icon: faEnvelope, info: "hello@littlelemon.ie" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = ({ navLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={"/images/logo-white.png"}
          alt="Little Lemon"
        />
        <div>
          <h4>Sitemap</h4>
          <ul className={styles.nav}>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div>
          <h4>Connect with us</h4>
          <ul className={styles.list}>
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={`https://www.${social.name}.com`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={social.icon}
                    size="lg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

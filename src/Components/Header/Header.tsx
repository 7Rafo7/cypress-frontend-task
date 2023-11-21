import React, {useState} from "react";
import logo from "../../Icons/logo.svg"
import styles from "./Header.module.css"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo"/>
        </div>

        <div className={styles.bar} onClick={toggleMenu}>
          <div className={styles.barLine}></div>
          <div className={styles.barLine}></div>
          <div className={styles.barLine}></div>
        </div>
      </div>

      <div className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>About Us</div>
        <div className={styles.navItem}>Services</div>
        <div className={styles.navItem}>Our Terms</div>
        <div className={styles.contact}>Contact us</div>
      </div>


    </div>
  )
}

export default Header
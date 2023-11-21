import React from "react";
import styles from "./Footer.module.css"
import instagram from "../../Icons/instagram.svg"
import facebook from "../../Icons/facebook.svg"
import tiktok from "../../Icons/tiktok.svg"
import youtube from "../../Icons/youtube.svg"
import logo from "../../Icons/logo.svg"

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.aboutContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Let's discuss making your interior like a dream place!</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardDescription}>Contact us below to work together to build your amazing interior</div>
          <div className={`${styles.btn}`}>Contact Us</div>
        </div>
      </div>

      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <div>
            <img src={logo} alt="Logo"/>
          </div>
          <div className={styles.logoText}>
            One of the best furniture agency.
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.actionDescription}>
            <span className={styles.dot}></span>
            <div>Enter your email to get the latest news</div>
          </div>
          <div className={styles.footerInput}>
            <input placeholder="Email Address" type="text"/>
          </div>
          <div className={styles.footerLinks}>
            <span>Follow us on</span>
            <div className={styles.links}>
              <img src={facebook} alt="Facebook"/>
              <img src={instagram} alt="Instagram"/>
              <img src={tiktok} alt="Tiktok"/>
              <img src={youtube} alt="Youtube"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
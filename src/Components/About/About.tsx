import React from "react";
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Project Overview</div>
        <div className={styles.cardContent}>
          <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. </p>
        </div>
        <div className={styles.cardFooter}>
          <span>July 22 - 2022</span>
          <span>Interior Design - Furniture</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Design Process</div>
        <div className={styles.cardContent}>
          <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
          <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
        </div>
      </div>

    </div>
  )
}

export default About
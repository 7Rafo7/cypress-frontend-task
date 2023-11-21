import React from "react";

import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Minimalist Room</div>
        <div className={styles.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
      </div>
      <div className={styles.image}>
        <img src="/assets/presentation.png" alt="presentation"/>
      </div>
    </div>
  )
}

export default Presentation
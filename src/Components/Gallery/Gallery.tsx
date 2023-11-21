import React from "react";
import styles from "./Gallery.module.css"

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.smallContainer}>
        <div className={styles.imageCard}>
          <img src="/assets/gallery-1.png" alt="gallery-1"/>
        </div>
        <div className={styles.imageCard}>
          <img src="/assets/gallery-2.png" alt="gallery-2"/>
        </div>
      </div>

      <div className={styles.bigConatiner}>
        <div className={styles.imageCard}>
          <img src="/assets/gallery-3-big.png" alt="gallery-3"/>
        </div>
      </div>

      <div className={styles.smallContainer}>
        <div className={styles.imageCard}>
          <img src="/assets/gallery-4.png" alt="gallery-4"/>
        </div>
        <div className={styles.imageCard}>
          <img src="/assets/gallery-5.png" alt="gallery-5"/>
        </div>
      </div>

    </div>
  )
}

export default Gallery
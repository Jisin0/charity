import React from 'react'
import styles from './PartnersBanner.module.css';

export default function PartnersBanner() {
  return (
    <div className={styles.partnersBanner}>
      <div className={`${styles.partner} ${styles.partner1}`} data-hover-text="Test Message">Úrad pre Slovákov žijúcich v zahraničí</div>
      <div className={`${styles.partner} ${styles.partner2}`}>ISEIA (International Slovak Educational Institutions & Associations)</div>
      <div className={`${styles.partner} ${styles.partner3}`}>Association of Slovak Schools and Community Centers in the UK</div>
      <div className={`${styles.partner} ${styles.partner4}`}>Univerzita Mateja Bela</div>
      <div className={`${styles.partner} ${styles.partner5}`}>Morrisons</div>
      <div className={`${styles.partner} ${styles.partner6}`}>Manchester College</div>
      <div className={`${styles.partner} ${styles.partner7}`}>Porta134 Café</div>
    </div>
  )
}

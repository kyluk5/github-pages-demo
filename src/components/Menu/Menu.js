import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.result_info}>
      <button className={styles.close}></button>
      <div className={styles.result}>
        <span className={styles.result_level}>$1,000,000</span>
        <span className={styles.result_level}>$500,000</span>
        <span className={styles.result_level}>$250,000</span>
        <span className={styles.result_level}>$125,000</span>
        <span className={styles.result_level}>$64,000</span>
        <span className={styles.result_level}>$32,000</span>
        <span className={styles.result_level}>$16,000</span>
        <span className={styles.result_level}>$8,000</span>
        <span className={styles.result_level}>$4,000</span>
        <span className={styles.result_level}>$2,000</span>
        <span className={styles.result_level}>$1,000</span>
        <span className={styles.result_level}>$500</span>
      </div>
    </div>
  );
};

export default Menu;

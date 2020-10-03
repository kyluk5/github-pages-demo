import React from "react";
import styles from "./Menu.module.css";

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("Questions_show__3m5-p");
}

const Menu = () => {
  return (
    <div id="menu" className={styles.result_info}>
      <button onClick={closeMenu} className={styles.close}></button>
      <div className={styles.result}>
        <span name="12" className={styles.result_level}>
          $1,000,000
        </span>
        <span name="11" className={styles.result_level}>
          $500,000
        </span>
        <span name="10" className={styles.result_level}>
          $250,000
        </span>
        <span name="9" className={styles.result_level}>
          $125,000
        </span>
        <span name="8" className={styles.result_level}>
          $64,000
        </span>
        <span name="7" className={styles.result_level}>
          $32,000
        </span>
        <span name="6" className={styles.result_level}>
          $16,000
        </span>
        <span name="5" className={styles.result_level}>
          $8,000
        </span>
        <span name="4" className={styles.result_level}>
          $4,000
        </span>
        <span name="3" className={styles.result_level}>
          $2,000
        </span>
        <span name="2" className={styles.result_level}>
          $1,000
        </span>
        <span name="1" className={styles.result_level}>
          $500
        </span>
      </div>
    </div>
  );
};

export default Menu;

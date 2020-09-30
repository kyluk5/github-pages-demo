import React from "react";
import styles from "./Questions.module.css";

const Questions = () => {
  return (
    <div className={styles.background}>
      <button className={styles.menu_button}></button>
      <h2 className={styles.question}>
        How old your elder brother was 10 years before you was born, mate?
      </h2>
      <div className={styles.button_wrapper}>
        <button className={styles.choise_button}>
          <span className={styles.choise_letter}>A</span>
          10 years
        </button>
        <button className={styles.choise_button}>
          <span className={styles.choise_letter}>B</span>
          11 years
        </button>
        <button className={styles.choise_button}>
          <span className={styles.choise_letter}>C</span>
          12 years
        </button>
        <button className={styles.choise_button}>
          <span className={styles.choise_letter}>D</span>
          14 years
        </button>
      </div>
    </div>
  );
};

export default Questions;

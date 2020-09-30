import React from "react";
import styles from "./TotalScore.module.css";
import FunctionalButton from "../../components/FunctionalButton/FunctionalButton";

import cool from "../../Icons/cool.svg";

const TotalScore = () => {
  return (
    <div className={styles.total_wrapper}>
      <img src={cool} alt="hand_guest" className={styles.cool} />
      <div className={styles.score_info}>
        <span className={styles.score_title}>Total score:</span>
        <h3 className={styles.score}>$8,000 earned</h3>
      </div>
      <FunctionalButton text={"Try again"} />
    </div>
  );
};

export default TotalScore;

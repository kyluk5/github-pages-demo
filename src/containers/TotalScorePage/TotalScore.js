import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TotalScore.module.css";
import FunctionalButton from "../../components/FunctionalButton/FunctionalButton";
import { score } from "../../components/Questions/Questions";

import cool from "../../assets/Icons/cool.svg";
import { navigation } from "../navigation";

const TotalScore = () => {
  return (
    <div className={styles.total_wrapper}>
      <img src={cool} alt="hand_guest" className={styles.cool} />
      <div className={styles.score_info}>
        <span className={styles.score_title}>Total score:</span>
        <h3 className={styles.score}>{`$ ${score} earned`}</h3>
      </div>
      <NavLink to={navigation.start}>
        <FunctionalButton text={"Try again"} />
      </NavLink>
    </div>
  );
};

export default TotalScore;

import React from "react";
import StartBackground from "../../components/StartBackground/StartBackground";
import FunctionalButton from "../../components/FunctionalButton/FunctionalButton";
import styles from "./Start.module.css";

import cool from "../../Icons/cool.svg";

const start = () => {
  return (
    <div className={styles.start_wraper}>
      <img src={cool} alt="hand_gesture" className={styles.hand_gesture} />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      {/* <button className={styles.start_button}>Start</button> */}
      <FunctionalButton text={"Start"} />
      <StartBackground />
    </div>
  );
};

export default start;

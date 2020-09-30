import React from "react";
import StartBackground from "../../components/StartBackground/StartBackground";
import styles from "./Start.module.css";

import cool from "./images/cool.svg";

const start = () => {
  return (
    <>
      <img src={cool} alt="hand_gesture" className={styles.hand_gesture} />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <button className={styles.start_button}>Start</button>
      <StartBackground />
    </>
  );
};

export default start;

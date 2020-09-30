import React from "react";
import styles from "./StartBackground.module.css";

import rectangle from "./images/Rectangle_16.svg";

const StartBackground = () => {
  return (
    <>
      <img
        src={rectangle}
        alt="rectangle"
        className={styles.start_background}
      />
    </>
  );
};

export default StartBackground;

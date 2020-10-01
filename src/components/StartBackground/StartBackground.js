import React from "react";
import styles from "./StartBackground.module.css";

import rectangle from "./images/rectangle_sm_md.png";

const StartBackground = () => {
  if (window.matchMedia("(max-width:1279px)".matches)) {
    return (
      <img
        src={rectangle}
        alt="rectangle"
        className={styles.start_background}
      />
    );
  }
};

export default StartBackground;

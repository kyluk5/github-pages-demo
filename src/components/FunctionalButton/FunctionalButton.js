import React from "react";
import styles from "./FunctionalButton.module.css";

function changeClass(e) {
  const target = e.target;
  target.classList.add(styles.button_pressed);
}

const FunctionalButton = ({ text }) => {
  return (
    <button onClick={changeClass} className={styles.functional_button}>
      {text}
    </button>
  );
};

export default FunctionalButton;

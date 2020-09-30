import React from "react";
import styles from "./FunctionalButton.module.css";

const FunctionalButton = ({ text }) => {
  return <button className={styles.functional_button}>{text}</button>;
};

export default FunctionalButton;

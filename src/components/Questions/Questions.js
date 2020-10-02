import React, { useState } from "react";
import styles from "./Questions.module.css";
import { questions } from "../../questions.json";

function changeClass(e) {
  const target = e.target;
  target.classList.add(styles.selected);
}

function animationMenu() {
  const menu = document.getElementById("menu");
  menu.classList.add(styles.show);
}

const Questions = () => {
  const [question, setQuestion] = useState(1);
  const text = questions.find((item) => item.id === String(question));
  const choise = text.answers;

  return (
    <div className={styles.background}>
      <button onClick={animationMenu} className={styles.menu_button}></button>
      <h2 className={styles.question}>{text.question}</h2>
      <div className={styles.button_wrapper}>
        <button onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>A</span>
          {Object.keys(choise[0])}
        </button>
        <button onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>B</span>
          {Object.keys(choise[1])}
        </button>
        <button onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>C</span>
          {Object.keys(choise[2])}
        </button>
        <button onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>D</span>
          {Object.keys(choise[3])}
        </button>
      </div>
    </div>
  );
};

export default Questions;

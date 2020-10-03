import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Questions.module.css";
import { questions } from "../../questions.json";
import { navigation } from "../../containers/navigation";

import corectSoundPath from "../../assets/Sound/corect.mp3";
import wrongSoundPath from "../../assets/Sound/wrong.mp3";
import completeGamePath from "../../assets/Sound/total.mp3";

function animationMenu() {
  const menu = document.getElementById("menu");
  menu.classList.add(styles.show);
}

function playSound(sound) {
  const audio = new Audio();
  audio.src = sound;
  audio.autoplay = true;
}

const Questions = () => {
  const history = useHistory();
  const [questionNumber, setQuestion] = useState(1);

  const currentObject = questions.find(
    (item) => item.id === String(questionNumber)
  );
  const choise = currentObject.answers;

  function changeClass(e) {
    const target = e.target;
    target.classList.add(styles.selected);

    setTimeout(() => {
      const currentId = Number(target.id);
      const [result] = Object.values(choise[currentId]);

      if (result === String(true)) {
        playSound(corectSoundPath);
        target.classList.add(styles.correct);

        setTimeout(() => {
          if (questionNumber <= Number(11)) {
            setQuestion(questionNumber + 1);
            const [passedLevel] = document.getElementsByName(
              String(questionNumber)
            );
            const [curentLevel] = document.getElementsByName(
              String(questionNumber + 1)
            );
            passedLevel.classList.remove(styles.result_current);
            passedLevel.classList.add(styles.result_passed);
            curentLevel.classList.add(styles.result_current);
          } else {
            playSound(completeGamePath);
            history.push(navigation.score);
          }

          target.classList.remove(styles.correct);
          target.classList.remove(styles.selected);
        }, 1000);
      } else {
        playSound(wrongSoundPath);
        target.classList.add(styles.wrong);
        setTimeout(() => {
          history.push(navigation.score);
        }, 1000);
      }
    }, 2000);
  }

  return (
    <div className={styles.background}>
      <button onClick={animationMenu} className={styles.menu_button}></button>
      <h2 className={styles.question}>{currentObject.question}</h2>
      <div className={styles.button_wrapper}>
        <button id="0" onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>A</span>
          {Object.keys(choise[0])}
        </button>
        <button id="1" onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>B</span>
          {Object.keys(choise[1])}
        </button>
        <button id="2" onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>C</span>
          {Object.keys(choise[2])}
        </button>
        <button id="3" onClick={changeClass} className={styles.choise_button}>
          <span className={styles.choise_letter}>D</span>
          {Object.keys(choise[3])}
        </button>
      </div>
    </div>
  );
};

export default Questions;

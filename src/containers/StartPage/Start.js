import React from "react";
import { NavLink } from "react-router-dom";

import StartBackground from "../../components/StartBackground/StartBackground";
import FunctionalButton from "../../components/FunctionalButton/FunctionalButton";
import { navigation } from "../navigation";
import styles from "./Start.module.css";

import cool from "../../assets/Icons/cool.svg";
import soundPath from "../../assets/Sound/hello.mp3";

function welcomeSound() {
  const audio = new Audio();
  audio.src = soundPath;
  audio.autoplay = true;
}

const start = () => {
  welcomeSound();

  return (
    <div className={styles.start_wraper}>
      <img src={cool} alt="hand_gesture" className={styles.hand_gesture} />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <NavLink to={navigation.questions}>
        <FunctionalButton text={"Start"} />
      </NavLink>

      <StartBackground />
    </div>
  );
};

export default start;

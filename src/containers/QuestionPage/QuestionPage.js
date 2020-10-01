import React, { useEffect } from "react";
import Questions from "../../components/Questions/Questions";
import Menu from "../../components/Menu/Menu";

import soundPath from "../../assets/Sound/start.mp3";

const QuestionPage = () => {
  function welcomeSound() {
    const audio = new Audio();
    audio.src = soundPath;
    audio.autoplay = true;
  }

  useEffect(() => {
    welcomeSound();
  }, []);

  return (
    <>
      <Questions />
      <Menu />
    </>
  );
};

export default QuestionPage;

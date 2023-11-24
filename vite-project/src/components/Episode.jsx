import React, { useState, useEffect } from "react";
import Display from "./Display";
import Code from "./Code";
import CodeQuizCardSet from "./CodeQuizCardSet";

const Episode = ({ episodeData }) => {
  const { scenes, characters, dialogue, codePanel, codeQuiz } = episodeData;

  // Separate indices for each type of asset
  const [sceneIndex, setSceneIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [codeIndex, setCodeIndex] = useState(0);

  // Main index to progress with each click
  const [mainIndex, setMainIndex] = useState(0);

  // State to track whether the code quiz is active
  const [isCodeQuizActive, setIsCodeQuizActive] = useState(false);

  // Function to handle click and increment the main index
  const handleDisplayClick = () => {
    // Check if the code quiz is active, if so, return without advancing
    if (isCodeQuizActive) {
      return;
    }

    // Increment the main index
    setMainIndex((prevIndex) => prevIndex + 1);
    console.log(mainIndex);
    // Check and update each asset type if the secondary index matches the main index
    if (
      sceneIndex + 1 < scenes.length &&
      scenes[sceneIndex + 1][1] === mainIndex
    ) {
      setSceneIndex((prevIndex) => prevIndex + 1);
    }

    if (
      characterIndex + 1 < characters.length &&
      characters[characterIndex + 1][1] === mainIndex
    ) {
      setCharacterIndex((prevIndex) => prevIndex + 1);
    }

    if (
      dialogueIndex + 1 < dialogue.length &&
      dialogue[dialogueIndex + 1][1] === mainIndex
    ) {
      setDialogueIndex((prevIndex) => prevIndex + 1);
    }

    if (
      codeIndex + 1 < codePanel.length &&
      codePanel[codeIndex + 1][1] === mainIndex
    ) {
      setCodeIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle the selection of the correct answer in the code quiz
  const handleCorrectAnswerSelected = () => {
    setIsCodeQuizActive(false);
    handleDisplayClick();
  };

  useEffect(() => {
    if (codeQuiz.some((quiz) => quiz[1] === mainIndex - 1)) {
      setIsCodeQuizActive(true);
    }
  }, [mainIndex, codeQuiz]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Display
          key={mainIndex}
          background={scenes[sceneIndex][0]}
          character={characters[characterIndex][0]}
          dialogue={dialogue[dialogueIndex][0]}
          onClick={handleDisplayClick}
        />
        <Code code={codePanel[codeIndex][0]} />
      </div>
      <div>
        {isCodeQuizActive && (
          <CodeQuizCardSet
            correctAnswerIndex={
              codeQuiz.find((quiz) => quiz[1] === mainIndex - 1)[0]
            }
            onCorrectAnswerSelected={handleCorrectAnswerSelected}
          />
        )}
      </div>
    </>
  );
};

export default Episode;

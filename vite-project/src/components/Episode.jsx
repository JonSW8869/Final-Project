import React, { useState } from "react";
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

  // Correct answer index for the current quiz
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

  // Function to handle click and increment the main index
  const handleDisplayClick = () => {
    // Increment the main index
    setMainIndex((prevIndex) => prevIndex + 1);

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

    // Check if there is a codeQuiz for the current mainIndex
    const currentQuiz = codeQuiz.find(
      ([_, quizIndex]) => quizIndex === mainIndex
    );
    if (currentQuiz) {
      // Set the correct answer index to the first value in the codeQuiz array
      setCorrectAnswerIndex(currentQuiz[0]);
    }
  };

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
        {/* Check if there is a codeQuiz for the current mainIndex */}
        {codeQuiz.some(([_, quizIndex]) => quizIndex + 1 === mainIndex) && (
          <CodeQuizCardSet correctAnswerIndex={correctAnswerIndex} />
        )}
      </div>
    </>
  );
};

export default Episode;

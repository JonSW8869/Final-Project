import React, { useState } from "react";
import Display from "./Display";
import Code from "./Code";

const Episode = ({ EpisodeNumber }) => {
  const { scenes, characters, dialogue, codes } = EpisodeNumber;

  // Separate indices for each type of asset
  const [sceneIndex, setSceneIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [codeIndex, setCodeIndex] = useState(0);

  // Main index to progress with each click
  const [mainIndex, setMainIndex] = useState(0);

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

    if (codeIndex + 1 < codes.length && codes[codeIndex + 1][1] === mainIndex) {
      setCodeIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Display
        key={mainIndex}
        background={scenes[sceneIndex][0]}
        character={characters[characterIndex][0]}
        dialogue={dialogue[dialogueIndex][0]}
        onClick={handleDisplayClick}
      />
      <Code code={codes[codeIndex][0]} />
    </div>
  );
};

export default Episode;

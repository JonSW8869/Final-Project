import "./Episode.css";
import Display from "./Display.jsx";
import Code from "./Code.jsx";

const Episode = ({ EpisodeNumber }) => {
  const scenes = EpisodeNumber.scenes;
  const characters = EpisodeNumber.characters;
  const codes = EpisodeNumber.codes;

  return (
    <div style={{ display: "flex" }}>
      <Display background={scenes[0][0]} character={characters[0][0]} />
      <Code code={codes[0][0]} />
    </div>
  );
};

export default Episode;

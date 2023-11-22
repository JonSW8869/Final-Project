import Episode from "./components/Episode";
import Episode1 from "./EpisodeData/EpisodeOne.json";

function App() {
  return (
    <div>
      <Episode
        background={Episode1[0].scene}
        character={Episode1[0].character}
      />
    </div>
  );
}

export default App;

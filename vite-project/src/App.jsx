import Episode from "./components/Episode";
import Episode1 from "./EpisodeData/Episode1.json";

function App() {
  return (
    <div>
      <Episode episodeData={Episode1} />
    </div>
  );
}

export default App;

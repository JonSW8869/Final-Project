import "./Episode.css";

const Episode = ({ background, character }) => {
  return (
    <div
      className="card d-flex justify-content-center align-items-center"
      style={{ position: "relative", marginLeft: "20%", width: "60%" }}
    >
      <img src={background} className="card-img-top" alt="..." />
      <div className="card-img-overlay">
        <img
          src={character}
          className="card-img"
          alt="..."
          style={{
            position: "relative",
            top: "55%",
            left: "10px",
            height: "30%",
            width: "20%",
          }}
        />
      </div>
      <div>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Episode;

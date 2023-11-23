const Scene = ({ background, character }) => {
  return (
    <div
      className="card float-left"
      style={{ position: "relative", width: "60%" }}
    >
      <img src={background} className="card-img-top" alt="..." />
      <div className="card-img-overlay">
        <img
          src={character}
          className="card-img"
          alt="..."
          style={{
            position: "relative",
            top: "50%",
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

export default Scene;

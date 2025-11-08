import "../styles/dev.css";
import p3 from "../img/gallery-03.jpg";

function Flutter() {
  return (
    <div className="dev">
      <div className="image">
        <img src={p3} alt="Ali Mohamed - Flutter Developer" />
      </div>

      <div className="details">
        <h2>Ali Mohamed</h2>
        <h3>Flutter Developer</h3>
        <p>
          Experienced in building high-performance cross-platform mobile
          applications using Flutter, ensuring smooth UI and great user
          experience.
        </p>
      </div>

      <div className="close">
        <button type="button">
            <a href="../#blog">X</a>
        </button>
      </div>
    </div>
  );
}

export default Flutter;

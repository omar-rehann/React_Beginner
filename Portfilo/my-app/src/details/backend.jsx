import "../styles/dev.css";
import p4 from "../img/gallery-04 (1).png";
import "../component/blog"

function Back() {
  return (
    <div className="dev">
      <div className="image">
        <img src={p4} alt="Ali Mohamed - Flutter Developer" />
      </div>

      <div className="details">
        <h2>Ali Rehan</h2>
        <h3>Backend Developer</h3>
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

export default Back;

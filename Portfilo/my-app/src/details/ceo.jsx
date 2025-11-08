import "../styles/dev.css";
import p6 from "../img/gallery-06 (1).png";

function Ceo() {
  return (
    <div className="dev">
      <div className="image">
        <img src={p6} alt="Ali Mohamed - Flutter Developer" />
      </div>

      <div className="details">
        <h2>Ali Mohamed</h2>
        <h3>Ceo Founder</h3>
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

export default Ceo;

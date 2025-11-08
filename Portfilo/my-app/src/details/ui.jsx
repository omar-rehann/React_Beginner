import "../styles/dev.css";
import p2 from "../img/gallery-02.png";

function Ui() {
  return (
    <div className="dev">
      <div className="image">
        <img src={p2} alt="Ali Mohamed - UI/UX Designer" />
      </div>

      <div className="details">
        <h2>Ali Mohamed</h2>
        <h3>UI / UX Designer</h3>
        <p>
          Specialized in creating intuitive and user-friendly interfaces focused
          on improving user experience and visual design consistency.
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

export default Ui;

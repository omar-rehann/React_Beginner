import { useState } from "react";
import "../styles/theme.css";

function Darklight() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`parent ${darkmode ? "dark_mode" : "light_mode"}`}>
      <div className="icon" onClick={() => setDarkmode(!darkmode)}>
        {darkmode ? (
        <i className="fa-solid fa-moon" style={{ color: "white" }}></i>

        ) : (
          <i className="fa-solid fa-sun" style={{ color: "#FFD43B" }}></i>
        )}
      </div>

      <div className="box">
        <h4>Omar Rehan</h4>
        <p>
          My name is Omar Rehan, I’m 19 years old and I graduated from the Faculty
          of Science (2021–2025).
        </p>
      </div>
    </div>
  );
}

export default Darklight;

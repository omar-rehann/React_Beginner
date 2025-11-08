import "../styles/dev.css"
import p1 from "../img/gallery-01.png"

function Development(){
    return(
        <>
     <div className="dev">
  <div className="image">
    <img src={p1} alt="Developer" />
  </div>

  <div className="details">
    <h2>Omar Rehan</h2>
    <h3>Frontend Developer</h3>
    <p>
      Specialized in building responsive, user-friendly web interfaces using
      React, Bootstrap, and modern JavaScript.
    </p>
  </div>

  <div className="close">
    <button>
            <a href="../#blog">X</a>

    </button>
  </div>
</div>

        </>
    )
}
export default Development
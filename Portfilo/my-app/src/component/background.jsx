import "../styles/all.css"
import "../styles/background.css"
import img from "../img/team-1 (4).jpg"
import {  useEffect, useState } from "react";
function Background(){
  const words = ["Front End Developer","UI UX Developer","Web Designer","Web Developer"];
    const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = isDeleting ? 50 : 100;

    const time = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(time);
  }, [text, isDeleting, index, words]);
    return(
        <>
        <div className="backgorund">
            <div className="text">
  <h4>Welcome To My World</h4>
  <h2>
    Hi, I'm <span>John Doe</span>
  </h2>
  <h3>{text}</h3>
  <p>
    I'm a passionate front-end developer who loves creating beautiful, responsive, 
    and user-friendly websites. I focus on clean code, modern design, and 
    smooth user experiences.
  </p>
<div className="boxes">
  <div className="box">
    <h4>Find With Me</h4>
    <div className="icon">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-facebook-messenger"></i>
      <i className="fa-brands fa-instagram"></i>
    </div>
  </div>

  <div className="box">
    <h4>Best Skill On</h4>
    <div className="icon">
      <i className="fa-solid fa-code"></i>
      <i className="fa-brands fa-figma"></i>
      <i className="fa-solid fa-pen-nib"></i>
    </div>
  </div>


</div>
<div className="boxes">
      <div className="box">
    <h4>Contact Me</h4>
    <div className="icon">
      <i className="fa-solid fa-envelope"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-whatsapp"></i>
    </div>
  </div>

  <div className="box">
    <h4>My Projects</h4>
    <div className="icon">
      <i className="fa-solid fa-laptop-code"></i>
      <i className="fa-solid fa-diagram-project"></i>
      <i className="fa-solid fa-trophy"></i>
    </div>
  </div>
</div>

</div>

            <div className="image">
                <img src={img} alt="" />

            </div>

        </div>
        </>
    )
}
export default Background
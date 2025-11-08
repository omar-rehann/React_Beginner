// src/component/blog.jsx
import { Link } from "react-router-dom";

import "../styles/blog.css";
import "../styles/all.css";
import P1 from "../img/gallery-01.png";
import P2 from "../img/gallery-02.png";
import P3 from "../img/gallery-03.jpg";
import P4 from "../img/gallery-04 (1).png";
import P5 from "../img/gallery-05.jpg";
import P6 from "../img/gallery-06 (1).png";

function Blog() {
  return (
    <div className="content" id="blog">
      <div className="all_boxes">
        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P1} alt="Development project" />
            </div>
            <div className="text">
              <h2>Development</h2>
              <h4><i className="fa-solid fa-heart"></i> 500</h4>
            </div>
            <hr />
            <Link to="/development" className="details-btn">Show Details</Link>
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P2} alt="UI UX Design" />
            </div>
            <div className="text">
              <h2>UI UX Designer</h2>
              <h4><i className="fa-solid fa-heart"></i> 600</h4>
            </div>
            <hr />
            <Link to="/ui" className="details-btn">Show Details</Link>
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P3} alt="Flutter Development" />
            </div>
            <div className="text">
              <h2>Flutter Developer</h2>
              <h4><i className="fa-solid fa-heart"></i> 500</h4>
            </div>
            <hr />
            <Link to="/flutter" className="details-btn">Show Details</Link>
          </div>
        </div>
      </div>

      <div className="all_boxes">
        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P4} alt="Backend Development" />
            </div>
            <div className="text">
              <h2>Backend Developer</h2>
              <h4><i className="fa-solid fa-heart"></i> 600</h4>
            </div>
            <hr />
            <Link to="/backend" className="details-btn">Show Details</Link>
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P5} alt="Cyber Security" />
            </div>
            <div className="text">
              <h2>Cyber Security</h2>
              <h4><i className="fa-solid fa-heart"></i> 600</h4>
            </div>
            <hr />
            <Link to="/cyber" className="details-btn">Show Details</Link>
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={P6} alt="CEO Founder" />
            </div>
            <div className="text">
              <h2>CEO Founder</h2>
              <h4><i className="fa-solid fa-heart"></i> 600</h4>
            </div>
            <hr />
            <Link to="/ceo" className="details-btn">Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
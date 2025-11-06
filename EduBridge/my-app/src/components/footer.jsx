import "../styles/font.css"
import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">

        <div className="footer_about">
          <h3>EduBridge</h3>
          <p>
            Empowering learners worldwide with modern online courses, interactive lessons, 
            and expert mentors to help you achieve your goals.
          </p>
        </div>

        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer_social">
          <h4>Follow Us</h4>
          <div className="social_icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© 2025 EduLearn. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

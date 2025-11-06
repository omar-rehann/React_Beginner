import "../styles/join.css"
import "../styles/font.css"


function Join() {
  return (
    <>
      <div className="join_section">
        <div className="join_content">
          <h2>Join Our Learning Community</h2>
          <p>
            Become part of thousands of learners improving their skills every day.  
            Get access to exclusive courses, mentorship, and certificates that boost your career.
          </p>

          <form className="join_form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Join;

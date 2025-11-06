import Boxes from "./boxes";
import "../styles/card.css"
import "../styles/font.css"

function Cards() {
  return (
    <>
      <div className="all_card">
        <Boxes
          icons="fa-solid fa-book"
          name="Book Library"
          text="Access thousands of books and resources to expand your knowledge anytime."
        />

        <Boxes
          icons="fa-solid fa-chart-pie"
          name="Market Analysis"
          text="Get real-time insights and analytics to understand the latest market trends."
        />

        <Boxes
          icons="fa-solid fa-code"
          name="50+ Online Courses"
          text="Join our interactive online classes led by industry experts worldwide."
        />
      </div>
    </>
  );
}

export default Cards;

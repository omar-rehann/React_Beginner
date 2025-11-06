import "../styles/three.css"
import "../styles/font.css"
import Threecard from "./threecard"
import img1 from "../img/course-01.jpg"
import img2 from "../img/course-02 (1).jpg"
import img3 from "../img/course-03 (1).jpg"
import img4 from "../img/course-04 (1).jpg"
import img5 from "../img/course-05.jpg"


function Three(){
    return(
        <>
           <div className="start">
        <h2>Practice Advice</h2>
        <h1>Make Online Education Accessible</h1>
        <p>
          Empower your learning journey with modern tools, expert instructors, and flexible online resources designed to help you grow faster and smarter.
        </p>
      </div>
       <div className="end">
  <Threecard
    imgg={img1}
    title="HTML & CSS Course"
    text="Master the fundamentals of web design using HTML5 and CSS3. Build your first responsive website step by step."
    price="$49"
  />

  <Threecard
    imgg={img2}
    title="JavaScript Essentials"
    text="Learn how to make your websites interactive with JavaScript — from basic logic to DOM manipulation."
    price="$59"
  />

  <Threecard
    imgg={img3}
    title="React JS Masterclass"
    text="Build modern web apps using React. Understand components, hooks, and API integration in real projects."
    price="$79"
  />

  <Threecard
    imgg={img4}
    title="UI / UX Design Basics"
    text="Discover how to design user-friendly interfaces and improve user experience using Figma and design principles."
    price="$69"
  />

  <Threecard
    imgg={img5}
    title="Bootstrap Framework"
    text="Speed up your development with Bootstrap. Learn how to create responsive layouts in no time."
    price="$39"
  />
</div>

        </>

    )
}
export default Three
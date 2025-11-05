import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../styles/landing.css";
import img1 from "../img/movies/bg-little-mermaid.jpg";
import img2 from "../img/movies/bg-the-black-demon.jpeg";
import img3 from "../img/movies/bg-the-covenant.jpeg";
import img4 from "../img/movies/bg-the-tank.jpeg";

function Landing() {

  const slides = [
    {
      img: img1,
      text: "The Little Mermaid is a live-action adaptation of Disney's classic, following Ariel, a curious mermaid who dreams of life on land. She makes a deal with the sea witch Ursula to trade her voice for legs, embarking on a journey of love and self-discovery with Prince Eric."
    },
    {
      img: img2,
      text: "The Black Demon is a tense drama centered on a family trapped on an oil rig, hunted by a massive megalodon shark. Blending environmental themes with survival stakes, it explores human resilience against nature's wrath."
    },
    {
      img: img3,
      text: "65 is a sci-fi action thriller where an astronaut crash-lands on a mysterious planet, only to discover it's Earth 65 million years ago. Facing dinosaurs and other dangers, he must protect himself and a young survivor to escape."
    },
    {
      img: img4,
      text: "The Covenant is a gripping war drama depicting a U.S. Army sergeant and his Afghan interpreter forging a bond amidst conflict. When the interpreter risks everything to save the soldier, a promise of rescue drives a tale of loyalty and sacrifice."
    }
  ];

  const [selected, useselected] = useState(slides[0]);

  return (
    <>
      <div className="parent"style={{ backgroundImage: `url(${selected.img})` ,backgroundSize:"cover"}}
>
        <div className="frist">
          <div className="navbar">
            <div className="logo">
              <h3>IMOVIES</h3>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Adults</a>
                  <a href="#">Kids</a>
                  <a href="#">Trend</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="swiper">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content">
                <div className="text">
                  <h4>2023 || 12+ || 2h 14min || Romance</h4>
                  <p>{selected.text}</p>
                </div>
                <div className="buttons">
                  <button>
                    <i className="fa-solid fa-video" style={{ color: "white", marginRight: "10px" }}></i>
                    Watched
                  </button>
                  <button>
                    <i className="fa-solid fa-list-check" style={{ color: "white", marginRight: "10px" }}></i>
                    My list Film
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {slides.map((element, index) => (
                  <SwiperSlide key={index} onClick={() => useselected(element)}>
                    <img src={element.img}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="name">
            <h5>Thank You For Visiting My Website</h5>
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook-messenger"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

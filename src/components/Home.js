import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
// import { Link } from "react-router-dom";

import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";
import mainCourse from "../images/mainCourse.jpg";
import snacks from "../images/snacks.jpg";
import dessert from "../images/dessert.jpg";
import appetizer from "../images/appetizer.jpg";

import breakfast from "../images/breakfast.jpg";

import background from "../images/background.jpg";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import slide6 from "../images/slide6.png";
import slide7 from "../images/slide7.png";
import slide8 from "../images/slide8.png";
import slide9 from "../images/slide9.png";
import slide10 from "../images/slide10.png";
import slide11 from "../images/slide11.png";
import soup from "../images/soup.jpg";
import salad from "../images/salad.jpg";
import whiteBackground from "../images/whiteBackground.jpg";

// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipysData: [],
      type: "",
    };
  }

  chooseType = (value) => {
    //  const amman = document.getElementById('BreakfastId').value

    console.log("value : ", value);
    this.setState({
      type: value,
    });
    console.log("type value : ", this.state.type);
  };

  render() {
    return (
      <div>
        <div>
          <head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
          </head>

          <div className="iconsContainer">
            <img className="firstImg" src={background} alt="First slide" />
            <img className="slide1" src={slide1} alt="First slide" />
            <img className="slide2 item" src={slide2} alt="First slide" />
            <img className="slide3 item" src={slide3} alt="First slide" />
            <img className="slide4 item" src={slide4} alt="First slide" />
            <img className="slide5 item" src={slide5} alt="First slide" />
            <div className="headerContainer">
              <h1 className="firstheader">Discover</h1>
              <h1 class="animate__animated animate__fadeInDown">
                Flavours 101
              </h1>

              <p className="childoffirstheader">
                Rain or shine, it’s time to dine
              </p>
              <img
                className="plateandforkicon"
                src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-large/1f37d-fe0f.png"
                alt=""
              />
            </div>
            <img className="slide6 item" src={slide6} alt="First slide" />
            <img className="slide7 item" src={slide7} alt="First slide" />
            <img className="slide8" src={slide8} alt="First slide" />

            <img className="slide11 item" src={slide11} alt="First slide" />
          </div>

          <div className="nineten">
            {" "}
            <img className="slide9" src={slide9} alt="First slide" />
            <img className="slide10" src={slide10} alt="First slide" />
          </div>
          <div>
            <img
              className="whiteBackground"
              src={whiteBackground}
              alt="background"
            />
            <div className="ourstorycontainer">
              <h3 className="story1 ">Our story</h3>
              <h2 className="story2">LOVE FOR FOOD</h2>
              <p className="story3">🍽️</p>

              <p className="story4">
                {" "}
                We are here to help you cook delicious meals with less stress
                and more joy. We offer recipes and cooking advice for home
                cooks, by home cooks. Helping create “kitchen wins” is what
                we’re all about
              </p>
            </div>
          </div>

          <div className="foodiesContainer">
            <h2 className="foodiesCategories"> FOODIES CATEGORIES</h2>
            <Row>
              {
                <div
                  class="cards"
                  value="breakfast"
                  id="BreakfastId"
                  onClick={() =>
                    this.chooseType(
                      document
                        .getElementById("BreakfastId")
                        .getAttribute("value")
                    )
                  }
                >
                  <div class="container">
                    {/* <a href="/category"> */}

                    <Image
                      className="categoryImg"
                      src={breakfast}
                      roundedCircle
                    />

                    <div class="overlay1">
                      <div class="text">BREAKFAST</div>
                    </div>

                    {/* </a> */}
                  </div>
                </div>
              }
              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={mainCourse}
                        roundedCircle
                      />
                      <div class="overlay1">
                        <div class="text">MAIN COURSE</div>
                      </div>
                    </a>
                  </div>
                </div>
              }

              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={dessert}
                        roundedCircle
                      />
                      <div class="overlay1">
                        <div class="text">DESSERT</div>
                      </div>
                    </a>
                  </div>
                </div>
              }
              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={drinks}
                        roundedCircle
                      />
                      <div class="overlay1">
                        <div class="text">DRINKS</div>
                      </div>
                    </a>
                  </div>
                </div>
              }

              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={snacks}
                        roundedCircle
                      />

                      <div class="overlay2">
                        <div class="text">SNACKS</div>
                      </div>
                    </a>
                  </div>
                </div>
              }
              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={appetizer}
                        roundedCircle
                      />
                      <div class="overlay2">
                        <div class="text"> APPETIZER</div>
                      </div>
                    </a>
                  </div>
                </div>
              }
              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image className="categoryImg" src={soup} roundedCircle />
                      <div class="overlay2">
                        <div class="text">SOUP</div>
                      </div>
                    </a>
                  </div>
                </div>
              }
              {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={salad}
                        roundedCircle
                      />
                      <div class="overlay2">
                        <div class="text">SALAD</div>
                      </div>
                    </a>
                  </div>
                </div>
              }
            </Row>
          </div>
          <Carousel id="slideShow" fade>
            <Carousel.Item>
              <img className="d-block w-100" src={hero5} alt="First slide" />
              {/* <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown item2">
                  Flavours 101
                </h1>

                <p className="dine">Rain or shine, it’s time to dine</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero2} alt="Third slide" />
              {/* <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>
                <p className="dine">Share with us your special recipies</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;

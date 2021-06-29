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
import drinks from "../images/drink.jpg";
import mainCourse from "../images/mainCourse.jpg";
import snacks from "../images/snacks.jpg";
import dessert from "../images/dessert.jpg";
import viewall from "../images/viewall.jpg";
import appetizer from "../images/appetizer.jpg";

import breakfast from "../images/breakfast.jpg";

// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


export class Home extends Component {
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
          <img src="orang.jpeg" alt="" />
          <Carousel id="slideShow" fade>
            <Carousel.Item>
              <img className="d-block w-100" src={hero2} alt="First slide" />
              <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>

                <p className="dine">Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero1} alt="Second slide" />
              <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>
                <p className="dine">
                  Learn how to make your favourite recipies
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero3} alt="Third slide" />
              <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>
                <p className="dine">Share with us your special recipies</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero4} alt="Third slide" />
              <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>
                <p className="dine2">Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero5} alt="Third slide" />
              <Carousel.Caption>
                <h1 className="heroText1">WELCOME!</h1>
                <h1 class="animate__animated animate__fadeInDown">
                  Flavours 101
                </h1>
                <p className="dine">Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="header1">
          <h1 class="animate__animated  animate__flipInX"> Who are we?</h1>
          <p>
            <h3 className="bio2">
              We are here to help you cook delicious meals with less stress and
              more joy. We offer recipes and cooking advice for home cooks, by
              home cooks. Helping create “kitchen wins” is what we’re all about
            </h3>
          </p>
        </div>
        <div>
          <h2 className="foodiesCategories"> FOODIES CATEGORIES</h2>
          <Row>
            {
                <div class="cards">
                  <div class="container">
                    <a href="/category">
                      <Image
                        className="categoryImg"
                        src={breakfast}
                        roundedCircle
                      />

                      <div class="overlay1">
                        <div class="text">BREAKFAST</div>
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
                    <Image className="categoryImg" src={drinks} roundedCircle />
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
                      <Image
                        className="categoryImg"
                        src={viewall}
                        roundedCircle
                      />
                      <div class="overlay2">
                        <div class="text">VIEW ALL</div>
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
                        src={viewall}
                        roundedCircle
                      />
                      <div class="overlay2">
                        <div class="text">VIEW ALL</div>
                      </div>
                    </a>
                  </div>
                </div>

            }
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;

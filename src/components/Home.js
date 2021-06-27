import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";

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
          {/* <img
            className="pic"
            src="https://images.unsplash.com/photo-1578435570165-1e7d7a207700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          ></img> */}
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero1} thumbnail />
                <h2 className="categoryImages-text">BREAKFAST</h2>
              </Col>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero1} thumbnail />
                <h2 className="categoryImages-text">LUNCH</h2>
              </Col>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero2} thumbnail />
                <h2 className="categoryImages-text">DESERT</h2>
              </Col>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero1} thumbnail />
                <h2 className="categoryImages-text">DRINKS</h2>
              </Col>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero1} thumbnail />
                <h2 className="categoryImages-text">SNACKS</h2>
              </Col>
              <Col xs={6} md={4}>
                <Image className="categoryImages" src={hero1} thumbnail />
                <h2 className="categoryImages-text">VIEW ALL</h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

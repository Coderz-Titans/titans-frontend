import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import logokkkkk from "../images/logokkkkk.png";
import orang from '../images/orang.jpeg';
import peppers from '../images/peppers.jpeg';

export class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="orang.jpeg" alt=""/>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={orang}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>WELCOME!</h1>
                <h2>Flavours 101</h2>
                <p>Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={logokkkkk}
                alt="Second slide"
              />
             <Carousel.Caption>
                <h1>WELCOME!</h1>
                <h2>Flavours 101</h2>
                <p>Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={peppers}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>WELCOME!</h1>
                <h2>Flavours 101</h2>
                <p>Rain or shine, it’s time to dine</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <h3> FOOD CATEGORIES </h3>
          <p>
            We are here to help you cook delicious meals with less stress and
            more joy. We offer recipes and cooking advice for home cooks, by
            home cooks. Helping create “kitchen wins” is what we’re all about.
          </p>
        </div>
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
          </Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
           <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
           <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
           <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
           <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import news2 from "../images/news2.jpg";
import hero4 from "../images/hero4.jpg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class News extends Component {
  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </head>

        <Image className="news" src={news2} />
        <div class="input-group" id="search">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="button">
            search
          </button>
        </div>

        <div className="container">
          <CardDeck className="newsCards">
            <Row id="cardRow">
              <Col xs={6} md={10}>
                <Card className="cardsNews">
                  <Card.Title className="cardTtitle">Card title</Card.Title>
                  <Image src={hero4} />
                  <Card.Body>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button variant="light">❤️</Button>
                    <Button variant="dark">Comment</Button>{" "}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>

              <Col xs={6} md={10}>
                <Card className="cardsNews">
                  <Card.Title className="cardTtitle">Card title</Card.Title>
                  <Image src={hero4} />
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                    <Button variant="light">❤️</Button>
                    <Button variant="dark">Comment</Button>{" "}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>

              <Col xs={6} md={10}>
                <Card className="cardsNews">
                  <Card.Title className="cardTtitle">Card title</Card.Title>
                  <Image src={hero4} />
                  {/* <Card.Img variant="top" src={news} roundedCircle /> */}
                  <Card.Body>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <Button variant="light">❤️</Button>
                    <Button variant="dark">Comment</Button>{" "}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>

              <Col xs={6} md={10}>
                <Card className="cardsNews">
                  <Image src={hero4} />
                  <Card.Title className="cardTtitle">Card title</Card.Title>
                  {/* <Card.Img variant="top" src={news} roundedCircle /> */}
                  <Card.Body>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <Button variant="light">❤️</Button>
                    <Button variant="dark">Comment</Button>{" "}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </CardDeck>
        </div>

        <div>
          <h3 className="popularPages"> POPULAR PAGES :</h3>
        </div>
      </div>
    );
  }
}

export default News;

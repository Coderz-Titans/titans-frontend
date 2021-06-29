import React, { Component } from 'react'
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class NewsCard extends Component {
    render() {
        return (
         
               
        <div className="container">
          <CardDeck className="newsCards">
            <Row id="cardRow">
              <Col xs={6} md={10}>
                <Card className="cardsNews">
                  <Card.Title className="cardTtitle">{this.props.dishTitle}</Card.Title>
                  <Image src={this.props.dishImg} />
                  <Card.Body>
                    <Card.Text>
                      {this.props.dishInfo}
                    </Card.Text>
                    <Button variant="light">❤️</Button>
                    <Button onClick={this.props.commentText} variant="dark">Comment</Button>{" "}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <form>
                        <p>
                          {this.props.usersName}
                          </p>
                          <Image src={this.props.usersImg} />
                          <Button variant="danger" onClick={() => { this.props.showingcommentModal() }}>
                            save
                          </Button>
                          <Button variant="danger" onClick={() => { this.props.showUpdateForm() }}>
                            Close
                        </Button>
                      </form>{" "}
                    </small>
                  </Card.Footer>
                  <Card.Footer>
                    <small className="text-muted">
                    </small>
                  </Card.Footer>
                </Card>
              </Col>       
            </Row>
          </CardDeck>
        </div> 
            
        )
    }
}

export default NewsCard

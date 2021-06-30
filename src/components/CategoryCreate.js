import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap/Modal";
export class CategoryCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      heartNumber: 0,
    };
  }

  functionl = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  heartRate = () => {
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    });
  };

  render() {
    return (
      <>
        {this.props.showBySort && (
          <Col xs={6} md={4}>
            <div className="collectionCards2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        )}

        {this.props.showRecipies && (
          <Col xs={6} md={3}>
            <div className="collectionCards">
              <Card style={{ width: "18rem" }} onSubmit={this.function}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    <p onClick={this.heartRate} class="heartRate">
                      ❤️ = {this.state.heartNumber}
                    </p>
                  </Card.Text>
                  <Card.Text onClick={this.functionl}> See more </Card.Text>
                  {this.state.show && (
                    <Card.Text>
                      {this.props.summary}
                      <br></br>

                      <p onClick={this.heartRate} class="heartRate">
                        ❤️ = {this.state.heartNumber}
                      </p>
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
        )}
      </>
    );
  }
}

export default CategoryCreate;

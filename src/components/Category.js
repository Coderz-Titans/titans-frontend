import Dropdown from 'react-bootstrap/Dropdown'
// import { Button } from "bootstrap";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropdownButton from 'react-bootstrap/DropdownButton'

export class category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      heartNumber: 0,
    }
  }

  functionl = () => {
    this.setState({
      show: true,
    })
  }
  heartRate = () => {
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    })
  }

  render() {
    return (
      <div class="row">
        <h1 id="h1Category">CATEGORY</h1>
        <hr id="hr-image"></hr>

        <div class="input-group" id="searchInput">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
        <Row id="DropdownButton">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1" onClick={this.functionl}>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          {this.state.show &&
            <Col xs={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
          }
        </Row>
        <Row id="cardCategory">
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }} onSubmit={this.function}>
              <Card.Img
                variant="top"
                src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <br></br>
                  <p onClick={this.heartRate} class="heartRate">❤️ = {this.state.heartNumber}</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <br></br>
                  <p onClick={this.heartRate} class="heartRate">❤️ = {this.state.heartNumber}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <br></br>
                  <p onClick={this.heartRate} class="heartRate">❤️ = {this.state.heartNumber}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default category;

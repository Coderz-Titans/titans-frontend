import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
// import CardColumns from "react-bootstrap/CardColumns";

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      serverUrl: process.env.REACT_APP_MY_SERVER,
    };
  }

  handelComment=async (id)=>{
    const reqBody = { email, commenterEmail, commenterImg, commenter, comment };
    await axios
      .put(`${this.state.serverUrl}/comment/${id}`, reqBody)
      .then((response) => {
        console.log("i'm heeeeeeeeeeeeeeeree");
        this.setState({});
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }
  componentDidMount = async () => {
    await axios
      .get(`${this.state.serverUrl}/recipes?email=${this.props.email}`)
      .then((response) => {
        // console.log(response.data[0]);
        this.setState({
          data: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message, this.state.data);
      });
  };
  render() {
    return (
      <div itemID="recipes">
        <CardGroup>
          {this.state.data.map((item, idx) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.dishImg} />
                <Card.Title>{item.dishTitle}</Card.Title>

                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Recipe Details<br></br>
                      <small className="text-muted">Click for overview</small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{item.dishInfo}</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                <Button variant="primary" onClick={handelComment(item._id)}>
                  Go somewhere
                </Button>
                <Card.Footer>
                  <small className="text-muted">
                    Last updated {item.updatedAt}
                  </small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

export default Recipes;

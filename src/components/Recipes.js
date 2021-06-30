import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
// import CardColumns from "react-bootstrap/CardColumns";

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showUpComment: false,
      serverUrl: process.env.REACT_APP_MY_SERVER,
    };
  }

  showComment = () => {
    this.setState({ showUpComment: !this.state.showUpComment });
  };
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
                <Button variant="primary" onClick={this.showComment}>
                  Comment
                </Button>
                <>
                  <Modal show={this.state.showUpdateForm} onHide={this.showComment}>
                    <Modal.Header closeButton>
                      <Modal.Title>Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {item.comments.map((comment, idx) => {
                        <Alert key={idx} variant='dark'>
                          {comment.commentText}
                        </Alert>
                      })}
                      <br></br>
                      <Form onSubmit={this.props.handelComment(item._id, item.autherEmail)}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Add a New Comment:</Form.Label>
                          <Form.Control
                            as="text"
                            rows={3}
                            placeholder="Add a New Comment"
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Comment
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </>
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
//
export default Recipes;

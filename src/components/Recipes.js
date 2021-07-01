import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
// import CardColumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      serverUrl: process.env.REACT_APP_MY_SERVER,
      showUpComment: false,
      showUpEdit: false,
    };
  }
  showComment = () => {
    this.setState({ showUpComment: !this.state.showUpComment });
  };
  showEdit = () => {
    this.setState({ showUpEdit: !this.state.showUpEdit });
  };
  render() {
    console.log("potato");
    return (
      <div id="recipes">
        <CardGroup>
          {this.props.data.page[0].recipes.map((item, idx) => {
            return (
              <Row>
                <Card style={{ width: "20.5rem" }}>
                <Card.Header>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png"
                    alt="delete"
                    height="30px"
                    onClick={() => this.props.deleteRecipe(item._id)}
                    />
                  <span>&nbsp; &nbsp; &nbsp;</span>
                  <img
                    src="https://www.pinclipart.com/picdir/big/19-190250_editor-edit-clipart-black-and-white-png-download.png"
                    alt="edit"
                    id="a{idx}"
                    height="20px"
                    onClick={this.showEdit}
                  />
                    </Card.Header>
                   
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
                <Button variant="dark" onClick={this.showComment}>
                  Comment
                </Button>
                <>
                  <Modal
                    show={this.state.showUpComment}
                    onHide={this.showComment}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {item.comments.map((comment, index) => {
                        return (
                          <Alert key={index} variant="dark">
                            {comment.commentText}
                          </Alert>
                        );
                      })}
                      <br></br>
                      <Form
                        onSubmit={(e) =>
                          this.props.handelComment(
                            e,
                            item._id,
                            item.autherEmail
                          )
                        }
                      >
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
                        <Button
                          variant="dark"
                          type="submit"
                          onClick={this.showComment}
                        >
                          Comment
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </>
                {/* edit ============================ */}

                <Modal show={this.state.showUpEdit} onHide={this.showEdit}>
                  <Modal.Header closeButton>
                {console.log(idx, item._id)}
                    <Modal.Title>Update Your Recipe : </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form
                      onSubmit={(e) => this.props.updateRecipe(e, item._id)}
                    >
                      <Form.Group className="mb-3" controlId="editForm">
                        <Form.Label>Recipe Title :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Recipe Title :"
                          defaultValue={item.dishTitle}
                        />
                        <Form.Label>Recipe Image :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="http://example.jpg"
                          defaultValue={item.dishImg}
                        />
                        <Form.Label>Recipe Info :</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Recipe info :"
                          defaultValue={item.dishInfo}
                        />
                      </Form.Group>
                      <Button
                        variant="dark"
                        type="submit"
                        onClick={this.showEdit}
                      >
                        Add
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
                <Card.Footer>
                  <small className="text-muted">
                    Last updated {item.updatedAt}
                  </small>
                </Card.Footer>
                </Card>
                </Row>
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

export default Recipes;

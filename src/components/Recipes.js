import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
// import CardColumns from "react-bootstrap/CardColumns";


import RecipeModal from "./RecipeModal";
import CommentModal from "./CommentModal";


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
      targetRecipe: {},
      targetId: 99,
    };
  }
  showComment = async (idx) => {
    console.log("TTTTTTTTTTTT");
    this.setState({
      showUpComment: !this.state.showUpComment,
      targetRecipe: this.props.data.page[0].recipes[idx],
      targetId: idx,
    });
  };
  showEdit = async (idx) => {
    console.log("GGGGGGGGGGGGGGGGGGG");
    this.setState({
      showUpEdit: !this.state.showUpEdit,
      targetRecipe: this.props.data.page[0].recipes[idx],
      targetId: idx,
    });
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
                    height="20px"
                    onClick={() => this.showEdit(idx)}
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
                <Button variant="dark" onClick={() => this.showComment(idx)}>
                  Comment
                </Button>
                {/* <>
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
                </> */}
                {/* edit ============================ */}

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
        {this.state.showUpEdit && (
          <RecipeModal
            recipe={this.state.targetRecipe}
            show={this.state.showUpEdit}
            showEdit={this.showEdit}
            updateRecipe={this.props.updateRecipe}
            targetId={this.state.targetId}
          />
        )}
        {this.state.showUpComment && (
          <CommentModal
            recipe={this.state.targetRecipe}
            show={this.state.showUpComment}
            showComment={this.showComment}
            handelComment={this.props.handelComment}
            targetId={this.state.targetId}
          />
        )}
      </div>
    );
  }
}

export default Recipes;

import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export class CommentModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.showComment}>
          <Modal.Header closeButton>
            <Modal.Title>Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.recipe.comments.map((comment, index) => {
              return (
                <>
                  <img
                    src={comment.usersImg}
                    alt=""
                    height="50px"
                    width="50px"
                  />
                  <h3>{comment.usersName} :</h3>
                  <Alert key={index} variant="dark">
                    {comment.commentText}
                  </Alert>
                </>
              );
            })}
            <br></br>
            {console.log(this.props.handelComment)}
            <Form
              onSubmit={(e) =>
                this.props.handelComment(
                  e,
                  this.props.recipe._id,
                  this.props.recipe.autherEmail,
                  this.props.showComment
                )
              }
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Add a New Comment:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add a New Comment"
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Comment
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CommentModal;

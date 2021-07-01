import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class RecipeModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.showEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Recipe : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) =>
                this.props.updateRecipe(
                  e,
                  this.props.recipe._id,
                  this.props.showEdit
                )
              }
            >
              <Form.Group className="mb-3" controlId="editForm">
                <Form.Label>Recipe Title :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Recipe Title :"
                  defaultValue={this.props.recipe.dishTitle}
                />
                <Form.Label>Recipe Image :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http://example.jpg"
                  defaultValue={this.props.recipe.dishImg}
                />
                <Form.Label>Recipe Info :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Recipe info :"
                  defaultValue={this.props.recipe.dishInfo}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RecipeModal;

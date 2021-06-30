import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  handelAddRecipe = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <div>
        <button id="buttonId" onClick={this.handelAddRecipe}>
          Add a Recipie
        </button>

        <Modal show={this.state.flag} onHide={this.handelAddRecipe}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Recipe : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.addRecipe(e)}>
              <Form.Group className="mb-3" controlId="exampleForm" required>
                <Form.Label>Recipe Title :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Recipe Title :"
                  required
                />
                <Form.Label>Recipe Image :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http://example.jpg"
                  required
                />
                <Form.Label>Recipe Info :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Recipe info :"
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                onClick={this.handelAddRecipe}
              >
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddRecipe;

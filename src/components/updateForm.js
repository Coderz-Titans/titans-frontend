
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export class UpdateForm extends Component {

    render() {
        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.props.showUpdateForm} onHide={() => { this.props.handleModalPut() }} >
                    <Modal.Header closeButton>Update</Modal.Header>

                    <Modal.Body>



                        <Form onSubmit={(e) => this.props.updateMyComment(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Enter your comment</Form.Label>
                                <Form.Control type="text" value={this.props.commentTextUpdate} required placeholder="Enter your comment" onChange={(e) => this.props.updatecommentTextUpdateForm(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>❤️</Form.Label>
                                <Form.Control
                                value={this.props.likesUpdate}
                                    as="textarea" required
                                    placeholder="Write a discription here"
                                    style={{ height: '100px' }}
                                    onChange={(e) => this.props.updateLikesUpdateForm(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>⭐⭐⭐⭐</Form.Label>
                                <Form.Control as="select" aria-label="Default select example" required onChange={(e) => this.props.updateRatesUpdateForm(e.target.value)} value={this.props.ratesUpdate} >
                                    
                                </Form.Control>
                            </Form.Group>

                          
                            <Button variant="success" type="submit">
                                Update
                            </Button>
                        </Form>



                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => { this.props.handleModalPut() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}



export default UpdateForm
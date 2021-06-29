import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap/Modal";
export class CategoryCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            heartNumber: 0,
        }
    }

    functionl = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    heartRate = () => {
        this.setState({
            heartNumber: this.state.heartNumber + 1,
        })
    }

    render() {
        return (
            <Col xs={6} md={4}>
                <Card style={{ width: "18rem" }} onSubmit={this.function}>
                    <Card.Img
                        variant="top"
                        src={this.props.image}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <p onClick={this.heartRate} class="heartRate">❤️ = {this.state.heartNumber}</p>
                        </Card.Text>
                        <Card.Text onClick={this.functionl}> See more </Card.Text>
                        {this.state.show &&
                            <Card.Text>

                                {this.props.summary}
                                <br></br>

                                <p onClick={this.heartRate} class="heartRate">❤️ = {this.state.heartNumber}</p>
                            </Card.Text>
                        }
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CategoryCreate;
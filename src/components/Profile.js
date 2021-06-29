import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }
  }

  addCommint = (e) => {
    e.preventDefault();
    this.setState({
      showForm: !this.state.showForm,
  })
}

  render() {
    return (
      <div>
        <div id="profileImages">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cover-photo%2Cbackground%2C-technology-design-template-bc18536076e97b440357165f6579fa78_screen.jpg?ts=1593444669" alt="" id="coverImage" />
          <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" id="userImage" />
          <img src="https://lh3.googleusercontent.com/proxy/TrX1YoNjfciLlhCtl4Y-PX6gqA9OE4Wk1yDa_kHAuG6zy5T8FH-__9h7YMPrZwSw6NwRhqILn2rYbbocWVtUJFNJLdM-bhx1" alt="" id="fixImage" />
          <h2 id="text"> Abdullah-Alabbadi Ibrahim-Alhamshari</h2>
          <button id="buttonId">Follow</button>
        </div>
        <div id="section2" >
          <h2  > Information </h2>
          <button id="buttonId2">Add a Recipie</button>
          <p id="text2" >Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit</p>

        </div>

        <div id="section3">
          <h2>
            Recipies
          </h2>
          <button id="buttonId3" onClick={this.addCommint}>Comment</button>
          {/* <button id="buttonId4">Add</button> */}
          <div>

            <h2>Information</h2>
            <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit</p>
            <img src="https://s3.amazonaws.com/appforest_uf/f1604057844295x639249448988566800/usertesting.png" alt="" />
            { this.state.showForm &&
              <Form>
                <Form.Row>
                  <Form.Label column lg={2}>
                    Normal Text
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="User Name" required/>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label column lg={2}>
                    Commint
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Write a text" required />
                  </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            }
          </div>
        </div>

      </div>


    );
  }
}

export default Profile;

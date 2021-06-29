import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import icone from "../images/clipart974538.png";
export class Profile extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth0;
    this.state = {
      showComment: false,
      data: [],
      showUpdateForm: false,
      profileImg: user.picture,
      profileEmail: user.email,
      profileName: user.name,
      info:"Edit your page !!",
    };
  }
  
  addCommint = (e) => {
    e.preventDefault();
    this.setState({
      showComment: !this.state.showComment,
    });
  };

  render() {
    return (
      <div>
        <div id="profileImages">
          <img
            src="https://images.unsplash.com/photo-1619526881542-c81baff85fa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""
            id="coverImage"
            height="50px"
          />
          <img src={this.state.profileImg} alt="" id="userImage" />
          <img
            src={icone}
            alt=""
            id="fixImage"
          />
          <h2 id="text">{this.state.profileName}</h2>
          <button id="buttonId">Follow</button>
        </div>
        <div id="section2">
          <h2> Headline </h2>
          <p id="text2">{this.state.info}</p>
        </div>
          <button id="buttonId2">Add a Recipie</button>

      </div>
    );
  }
}

export default withAuth0(Profile);

        // <div id="section3">
        //   <h2>Recipies</h2>
        //   <button id="buttonId3" onClick={this.addCommint}>
        //     Comment
        //   </button>
        //   {/* <button id="buttonId4">Add</button> */}
        //   <div>
        //     <h2>Information</h2>
        //     <p>
        //       Lorem ipsum dolor sit amet et delectus accommodare his consul
        //       copiosae legendos at vix ad putent delectus delicata usu. Vidit
        //     </p>
        //     <img
        //       src="https://s3.amazonaws.com/appforest_uf/f1604057844295x639249448988566800/usertesting.png"
        //       alt=""
        //     />
        //     {this.state.showComment && (
        //       <Form>
        //         <Form.Row>
        //           <Form.Label column lg={2}>
        //             Normal Text
        //           </Form.Label>
        //           <Col>
        //             <Form.Control
        //               type="text"
        //               placeholder="User Name"
        //               required
        //             />
        //           </Col>
        //         </Form.Row>
        //         <Form.Row>
        //           <Form.Label column lg={2}>
        //             Commint
        //           </Form.Label>
        //           <Col>
        //             <Form.Control
        //               type="text"
        //               placeholder="Write a text"
        //               required
        //             />
        //           </Col>
        //         </Form.Row>
        //         <Button variant="primary" type="submit">
        //           Submit
        //         </Button>
        //       </Form>
        //     )}
        //   </div>
        // </div>
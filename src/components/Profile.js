import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import icone from "../images/clipart974538.png";
import Recipes from "./Recipes";
import AddRecipe from "./AddRecipe";
export class Profile extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth0;
    this.state = {
      showComment: false,
      data: {},
      showUpdateForm: false,
      profileImg: user.picture,
      profileEmail: user.email,
      profileName: user.email,
      info: "Edit your page !!",
      profileCover: "",
      serverUrl: process.env.REACT_APP_MY_SERVER,
    };
  }

  updateMyPage = async (e) => {
    e.preventDefault();
    this.handelEdit();
    const reqBody = {
      email: this.state.profileEmail,
      pageName: this.state.profileEmail,
      name: e.target[0].value,
      coverImg: e.target[2].value,
      profileImg: e.target[1].value,
      info: e.target[3].value,
    };

    // to send a request for creating new data, we will be using the POST method
    await axios
      .put(`${this.state.serverUrl}/page`, reqBody)
      .then((response) => {
        console.log("i'm heeeeeeeeeeeeeeeree");
        this.setState({
          data: response.data,
          profileName: e.target[0].value,
          profileCover: e.target[2].value,
          profileImg: e.target[1].value,
          info: e.target[3].value,
        });
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  handelComment = async (e, id, autherEmail) => {
    e.preventDefault();
    console.log(e, id, autherEmail);
    // const reqBody = {
    //   email: autherEmail,
    //   commenterEmail: this.state.profileEmail,
    //   commenterImg: this.state.profileImg,
    //   commenter: this.state.profileName,
    //   comment: e.target.value,
    // };
    // await axios
    //   .post(`${this.state.serverUrl}/comment/${id}`, reqBody)
    //   .then((response) => {
    //     this.setState({});
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error.message));
  };

  handelEdit = () => {
    this.setState({ showUpdateForm: !this.state.showUpdateForm });
  };
  addCommint = (e) => {
    e.preventDefault();
    this.setState({
      showComment: !this.state.showComment,
    });
  };

  componentWillMount = async () => {
    const reqBody = {
      email: this.state.profileEmail,
    };
    await axios
      .post(`${this.state.serverUrl}/user`, reqBody)
      .then((response) => {
        // console.log(response.data[0]);
        this.setState({
          data: response.data,
          profileImg: response.data.page[0].profileImg,
          profileEmail: response.data.page[0].pageName,
          profileName: response.data.page[0].name,
          info: response.data.page[0].info,
          profileCover: response.data.page[0].coverImg,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(this.state.serverUrl);
        console.log(error.message, this.state.data);
      });
  };

  addRecipe = async (e) => {
    e.preventDefault();
    console.log(e);
    const reqBody = {
      email: this.state.profileEmail,
      dishTitle: e.target[0].value,
      dishImg: e.target[1].value,
      dishInfo: e.target[2].value,
    };

    await axios
      .post(`${this.state.serverUrl}/recipe`, reqBody)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => console.log(error.message));
  };

  deleteRecipe = async (id) => {
    console.log(id);
    axios
      .delete(
        `${this.state.serverUrl}/recipe/${id}?email=${this.state.profileEmail}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => console.log(error.message));
  };

  updateRecipe = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const reqBody = {
      email: this.state.profileEmail,
      dishTitle: e.target[0].value,
      dishImg: e.target[1].value,
      dishInfo: e.target[2].value,
    };
    await axios
      .put(`${this.state.serverUrl}/recipe/${id}`, reqBody)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => console.log(error.message));
  };
  render() {
    console.log(this.state.data);

    return (
      <div>
        <div id="profileImages">
          <img
            src={this.state.profileCover}
            alt=""
            id="coverImage"
            height="50px"
          />
          <img src={this.state.profileImg} alt="" id="userImage" />
          <img src={icone} alt="" id="fixImage" onClick={this.handelEdit} />
          <h2 id="text">{this.state.profileName}</h2>
          {/* <button id="buttonId">Follow</button> */}
        </div>
        <div id="section2">
          <h2> Headline </h2>
          <p id="text2">{this.state.info}</p>
        </div>
        <AddRecipe addRecipe={this.addRecipe} />

        <Modal show={this.state.showUpdateForm} onHide={this.handelEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Page Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.updateMyPage}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name !!"
                  defaultValue={this.state.profileName}
                />
                <Form.Label>Profile Img :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http://example.jpg"
                  defaultValue={this.state.profileImg}
                />
                <Form.Label>Profile Cover :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http://example.jpg"
                  defaultValue={this.state.profileCover}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Headline :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={this.state.info}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        {console.log(this.state.data)}
        {this.state.data.page?.length > 0 && (
          <Recipes
            email={this.state.profileEmail}
            data={this.state.data}
            handelComment={this.handelComment}
            deleteRecipe={this.deleteRecipe}
            updateRecipe={this.updateRecipe}
          />
        )}
      </div>
    );
  }
}
export default withAuth0(Profile);

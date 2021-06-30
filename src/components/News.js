import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import news2 from "../images/news2.jpg";
import UpdateForm from "./updateForm";
import Carousel from "react-bootstrap/Carousel";

import axios from "axios";
import NewsCard from "./NewsCard";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";

console.log(withAuth0);

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userEmail: this.props.auth0.user.email,
      serverUrl: process.env.REACT_APP_SERVER_URL,

      show: false,
      showUpdate: false,

      recipes: [],

      commentData: [],
      followersData: [],

      usersName: "",
      usersImg: "",
      commentText: "",
      likes: "",

      commentUpdate: "",
      likesUpdate: "",

      commentIndex: 0,
    };
  }
  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  //*********************recipes get****************************** */

  componentDidMount = () => {
    // console.log(this.props.auth0);

    axios
      .get(`${this.state.serverUrl}/follow?`)
      .then((response) => {
        this.setState({
          followers: response.data.page[0].followersData,
        });
        // console.log(response.data.page[0].followersData);
      })

      .catch((error) => {
        alert(error.message);
      });
  };
  /************************/
  componentDidMount = () => {
    axios
      .get(`${this.state.serverUrl}/recipes?email=${this.state.userEmail}`)
      .then((response) => {
        this.setState({
          recipes: response.data.page[0].recipes[0],
        });
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  /**************************end get******************************* */

  /*********COMMENTS POST**************/
  commentTextUpdate = (comment) => {
    this.setState({ comment });
  };

  createComment = (e) => {
    e.preventDefault();

    const reqBody = {
      // email: this.state.userEmail,
      usersName: this.state.usersName,
      commentText: this.state.commentText,
      usersImg: this.state.usersImg,
    };
    // console.log(reqBody)
    axios
      .post(`${this.state.serverUrl}/comment/:recipes_id`, reqBody)
      .then((response) => {
        this.setState({
          commentData: response.data.page[0].recipes[0].comments[0],
        });
      })
      .catch((error) => alert(error.message));
    this.showModal();
  };
  /*********** LIKES POST ****************/
  // updatelikes = (commentText) => {
  //   this.setState({ commentText });
  // };

  createMyLike = (e) => {
    e.preventDefault();

    const reqBody = {
      likes: this.state.likes,
    };
    axios
      .post(`${this.state.serverUrl}/like/:recipes_id`, reqBody)
      .then((response) => {
        console.log(response);
        this.setState({
          likesData: response.page[0].recipes[0].likes,
        });
      })
      .catch((error) => alert(error.message));
    this.showModal();
  };

  // ************************************* End POST *************************************/

  // ************************************* COMMENT PUT  *************************************/

  updatecommentTextUpdateForm = (Update) =>
    this.setState({ commentTextUpdate: Update });

  // updateForm = (commentObject, idx) => {
  //   console.log(commentObject);
  //   this.setState({
  //     showUpdateForm: !this.state.showUpdateForm,
  //     commentTextUpdate: commentObject.commentText,
  //     bookIndex: idx,
  //   });
  //   console.log(this.state.commentTextUpdate);
  // };
  /****************************/
  updateMyComment = (e) => {
    e.preventDefault();
    const reqBody = {
      commentText: this.state.commentTextUpdate,
    };

    axios
      .put(
        `${this.state.serverUrl}/comment/:comment_id/${this.state.commentIndex}`,
        reqBody
      )
      .then((response) => {
        this.setState({
          commentData: response.page[0].recipes[0].comments,
        });
      })
      .catch((error) => alert(error.message));
    this.handleModalPut();
  };

  handleModalPut = () => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
    });
  };

  // ************************************* END COMMENT PUT  *************************************/

  // *************************************  COMMENT Delete  *************************************/

  // deleteMyComment = (index) => {
  //   // console.log(index);
  //   axios
  //     .delete(
  //       `${this.state.serverUrl}/comment/:comment_id/${index}?email=${this.state.userEmail}`
  //     )
  //     .then((response) => {
  //       this.setState({
  //         commentData: response.page[0].recipes[0].comments,
  //       });
  //       // console.log(this.state.commentData);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // ************************************* END COMMENT Delete  *************************************/

  // *************************************  LIKES Delete  *************************************/
  // deleteMyLikes = (index) => {
  //   // console.log(index);
  //   axios
  //     .delete(
  //       `${this.state.serverUrl}/like/:like_id/${index}?email=${this.state.userEmail}`
  //     )
  //     .then((response) => {
  //       this.setState({
  //         likesData: response.page[0].recipes[0].likes,
  //       });
  //       // console.log(this.state.commentData);
  //     })
  //     .catch((error) => alert(error.message));
  // };
  // ************************************* END LIKES Delete  *************************************/

  render() {
    return (
      <div>
        <Image className="news" src={news2} />
        <div class="input-group" id="search">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="button">
            search
          </button>
        </div>

        <NewsCard
          commentTextUpdate={this.commentTextUpdate}
          likesUpdate={this.likesUpdate}
          createComment={this.createComment}
          // showingcommentModal={this.showingcommentModal}
          showModal={this.showModal}
        />

        <>
          {this.state.commentData.length && (
            <Carousel id="carousel">
              {this.state.commentData.map((value, index) => {
                return (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={value.usersImg}
                      alt={value.usersName}
                    />
                    <Carousel.Caption id="carouselCaption">
                      <h2>{value.usersName}</h2>
                      <p>{value.commentText}</p>
                      {/* <p>⭐⭐⭐⭐{value.rates}</p>
                        <p>❤️{value.likes}</p> */}

                      <Button onClick={(e) => this.UpdateForm(value, index)}>
                        Update
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          )}
        </>

        <>
          {this.state.showUpdateForm && (
            <UpdateForm
              updatecommentTextUpdateForm={this.updatecommentTextUpdateForm}
              // updateLikesUpdateForm={this.updateLikesUpdateForm}
              // updateRatesUpdateForm={this.updateRatesUpdateForm}
              commentTextUpdate={this.state.commentTextUpdate}
              // likesUpdate={this.state.likesUpdate}
              // // ratesUpdate={this.state.ratesUpdate}
              // showUpdateForm={this.state.showUpdateForm}
              updateMyComment={this.updateMyComment}
              handleModalPut={this.handleModalPut}
            />
          )}
        </>

        <div>
          <h3 className="popularPages"> POPULAR PAGES :</h3>
        </div>
      </div>
    );
  }
}

export default withAuth0(News);
// export default News;

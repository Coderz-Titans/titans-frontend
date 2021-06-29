import Dropdown from 'react-bootstrap/Dropdown'
import CategoryCreate from './CategoryCreate';
import axios from 'axios';
// import { Button } from "bootstrap";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropdownButton from 'react-bootstrap/DropdownButton'

export class category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      heartNumber: 0,
      recipysData: [],
    }
  }

  functionl = () => {
    this.setState({
      show: true,
    })
  }
  heartRate = () => {
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    })
  }

  componentDidMount = () => {
    console.log(this.state.serverUrl);
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey='96fb6427bbb14ca69161ce3bd9b5a06c'&type=dessert&fillIngredients=true&number=25&addRecipeInformation=true`).then(response => {
      console.log(response);
      this.setState({
        recipysData: response.data.results,
      })

    }).catch(
      error => {
        alert(error.message);
      }
    )
  }


  render() {
    return (
      <div>
        <div>
          <div class="row">
            <h1 id="h1Category">CATEGORY</h1>
            <hr id="hr-image"></hr>

            <div class="input-group" id="searchInput">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-primary">
                search
              </button>
            </div>
          </div>

          <Row id="DropdownButton">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1" onClick={this.functionl}>The most rated</Dropdown.Item>
            </DropdownButton>

            {this.state.show &&
              <Col xs={6} md={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://blog.amigofoods.com/wp-content/uploads/2020/07/costa-rican-breakfast-foods.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>

                </Card>
                {/* <CategoryCreate /> */}
              </Col>
            }

          </Row>
        </div>
        <Row id="cardCategory">
          {
            this.state.recipysData.map((element) => {
              console.log(element);
              return (
                <CategoryCreate
                  title={element.title}
                  image={element.image}
                  summary={element.summary}
                  object={element.likes}
                />

              );
            })
          }
        </Row>
      </div>
    );
  }
}

export default category;

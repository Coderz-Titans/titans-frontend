import Dropdown from 'react-bootstrap/Dropdown'
import CategoryCreate from './CategoryCreate';
import axios from 'axios';
// import { Button } from "bootstrap";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import DropdownButton from 'react-bootstrap/DropdownButton'

export class category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      heartNumber: 0,
      recipysData: [],
      sortedData: [],
      showSort: false,
    }
  }

  functionl = async (value) => {

    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey='96fb6427bbb14ca69161ce3bd9b5a06c'&type=breakfast&fillIngredients=true&number=25&addRecipeInformation=true&sort=${value}&sortDirection=desc`).then(response => {
      console.log(response);
      console.log(this.state.sortedData);
      console.log(this.state.showSort);
      this.setState({
        sortedData: response.data.results,
      })

      console.log(this.state.showSort);
    }).catch(
      error => {
        alert(error.message);
      }
    )
    this.state.sortedData.splice(6, (this.state.sortedData.length))
    this.setState({
      showSort: true,
    })
    console.log(this.state.sortedData);
  }

  heartRate = () => {
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    })
  }

  componentDidMount = async () => {
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey='96fb6427bbb14ca69161ce3bd9b5a06c'&type=breakfast&fillIngredients=true&number=25&addRecipeInformation=true`).then(response => {
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
            <DropdownButton id="dropdown-basic-button" title="Type of arrange">
              <Dropdown.Item href="#/action-1" value="popularity" id="BreakfastId" onClick={() => this.functionl(document.getElementById('BreakfastId').getAttribute('value'))}> Popularity</Dropdown.Item>

              <Dropdown.Item href="#/action-1" value="time" id="BreakfastId2" onClick={() => this.functionl(document.getElementById('BreakfastId2').getAttribute('value'))}>Time</Dropdown.Item>

              <Dropdown.Item href="#/action-1" value="calories" id="BreakfastId3" onClick={() => this.functionl(document.getElementById('BreakfastId3').getAttribute('value'))}>Calories</Dropdown.Item>
            </DropdownButton>

            {this.state.showSort &&
              this.state.sortedData
                .map((element) => {
                  console.log(element);
                  return (
                    <CategoryCreate
                      showBySort={true}
                      title={element.title}
                      image={element.image}
                      summary={element.summary}
                      object={element.likes}
                    />
                  )
                })}



          </Row>
        </div>
        <Row id="cardCategory">

          {this.state.show &&
            this.state.recipysData.map((element) => {
              return (
                <CategoryCreate
                  showRecipies={true}
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

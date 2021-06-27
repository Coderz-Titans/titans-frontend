import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class category extends Component {
  render() {
    return (
      <div>
        <h1 id="h1Category">CATEGORY</h1>
        <hr id="hr-image"></hr>

        <div class="input-group" id="searchInput">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon"/>
          <button type="button" class="btn btn-outline-primary">search</button>
        </div>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://elforsan.net/uploads/videos/image_preview/607d530fa43a3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    );
  }
}

export default category;

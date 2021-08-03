import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";

export class Colors extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" , display:'inline-block'}}>
          <Card.Img variant="top" src={this.props.color.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.color.title}</Card.Title>
            <Button variant="primary" onClick={()=> this.props.addToFav(this.props.color)}>Add to Favorite</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Colors;

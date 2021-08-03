import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';

export class Favorite extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", display: "inline-block" }}>
          <Card.Img variant="top" src={this.props.color.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.color.title}</Card.Title>
            <Button
              variant="primary"
              onClick={() => this.props.showForm(this.props.index)}
            >
              Update
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.deleteFav(this.props.index)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(Favorite);

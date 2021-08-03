import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={this.props.title}
              onChange={this.props.titleHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={this.props.imageUrl}
              onChange={this.props.imageUrlHandler}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => this.props.updateFav(e)}
          >
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;

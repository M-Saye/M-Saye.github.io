import React, { Component } from "react";
import { Button } from "reactstrap";

class SubmitButton extends Component {
  render() {
    return (
      <Button type="submit" color="success" size="sm">
        Save
      </Button>
    );
  }
}

export default SubmitButton;

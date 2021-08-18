import React, { Component } from "react";
import Car from "./Car";
class Form extends Component {
  render() {
    return (
      <div>
        <Car color="blue" height="400" />
        <h1>Comment</h1>
        Form
      </div>
    );
  }
}

export default Form;

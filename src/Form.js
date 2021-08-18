import React, { Component } from "react";
import Car from "./Car";
class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "green", "red", "purple", "black", "pink"],
  };

  handlePseudo = (e) => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <div>
        <Car color="blue" height="400" />
        <h1>Comment</h1>
        <form action="">
          <div>
            <label htmlFor="">pseudo</label>

            <input
              type="text"
              value={this.state.username}
              onChange={this.handlePseudo}
            />
          </div>
          <div>
            <label htmlFor="">color</label>
            <select name="" id="">
              <option value="green">green</option>
              <option value="red">red</option>
              <option value="purple">purple</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

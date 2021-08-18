import React, { Component } from "react";
import Car from "./Car";

const redTitle = { fontSize: "50px", color: "red" }; //css inLine
class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "green", "red", "purple", "cyan", "pink", "yellow", "brown"],
    comment: "",
  };

  handlePseudo = (e) => {
    this.setState({ username: e.target.value });
  };

  handleColor = (event) => {
    this.setState({ color: event.target.value });
  };

  handleComments = (ev) => {
    this.setState({ comment: ev.target.value });
  };

  handleSubmitForm = (eve) => {
    eve.preventDefault();
    console.log(
      `Username: ${this.state.username} Color: ${this.state.color} Comment: ${this.state.comment} `
    );
  };
  render() {
    return (
      <div>
        <Car color={this.state.color} height="400" />
        <h1 style={redTitle}>Comment</h1> {/**!inLine CSS*/}
        <form onSubmit={this.handleSubmitForm}>
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
            <select
              value={this.state.color}
              onChange={this.handleColor}
              name=""
              id=""
            >
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="">comment</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleComments}
            ></textarea>
          </div>
          <button>validate</button>
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import axios from "axios";

class GreenItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("deleting greens");
    let byeByeGreen = {
      deleteFood: this.props.vegetable.food_name
    };
    axios
      .delete("/greens", { data: byeByeGreen }) //special case for axios.delete
      .then(() => {
        this.props.getGreens();
      })
      .catch(err => {
        console.log("error updating deleted green", err);
      });
  }

  render() {
    return (
      <li
        key={this.props.vegetable._id}
        // style={liStyle}
      >
        {`${this.props.vegetable.food_name} Located At Aisle Number: ${this.props.vegetable.isle_number}`}
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
}

export default GreenItem;

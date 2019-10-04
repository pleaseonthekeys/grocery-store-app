import React, { Component } from "react";
import axios from "axios";

class FruitItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("deleting");
    let byeByeFruit = {
      deleteFood: this.props.fruit.food_name
    };
    axios
      .delete("/fruit", { data: byeByeFruit }) //special case for axios.delete
      .then(() => {
        this.props.getFruit();
      })
      .catch(err => {
        console.log("error updating deleted fruit list", err);
      });
  }

  render() {
    return (
      <li
        key={this.props.fruit._id}
        // style={liStyle}
      >
        {`${this.props.fruit.food_name} Located At Aisle Number: ${this.props.fruit.isle_number}`}
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
}

export default FruitItem;

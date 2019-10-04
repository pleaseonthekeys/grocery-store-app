import React, { Component } from "react";
import Axios from "axios";
//what do I want each item to look like?
//put delete function in here since it is directly related to the button we append to each item
class ProteinItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("deleteing protein item");
    let byeByeProtein = {
      deleteFood: this.props.proteinItem.food_name
    };

    Axios.delete("/protein", { data: byeByeProtein })
      .then(() => {
        this.props.getProtein();
      })
      .catch(err => {
        console.log("error deleting protein");
      });
  }

  render() {
    const liStyle = {
      color: "blue"
    };
    return (
      <li key={this.props.proteinItem._id} style={liStyle}>
        {`${this.props.proteinItem.food_name} Can be Found in Ailse: ${this.props.proteinItem.isle_number}`}
        <button onClick={this.handleClick}>CLICK IF OUT OF STOCK</button>
      </li>
    );
  }
}

export default ProteinItem;

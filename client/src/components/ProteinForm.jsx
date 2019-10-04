import React, { Component } from "react";

class ProteinForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isle: 9,
      type: "protein",
      old_isle: 0,
      new_isle: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleIsleChangeSubmit = this.handleIsleChangeSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit handled");

    const proteinInput = {
      name: this.state.name,
      type: this.state.type,
      isle: this.state.isle
    };

    this.props.addProtein(proteinInput);
  }

  handleChange(event) {
    console.log("change handled, change state here");
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleIsleChangeSubmit(event) {
    //updating protein here
    //state has been set by handleChange, we use state in submit
    console.log("updating protein aisle");
    event.preventDefault();
    let currentState = this.state;

    const newAisle = {
      name: currentState.name,
      type: currentState.type,
      isle: currentState.isle,
      old_isle: currentState.old_isle,
      new_isle: currentState.new_isle
    };

    this.props.updateProteinIsle(newAisle);
  }

  render() {
    let divStyle = {
      color: "blue"
    };
    return (
      <div style={divStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            PROTEIN NAME:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            AISLE NUMBER:
            <input
              type="number"
              name="isle"
              value={this.state.isle}
              onChange={this.handleChange}
            />
          </label>
          <label>
            FOOD TYPE:
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleIsleChangeSubmit}>
          <label>
            OLD AISLE:
            <input
              type="number"
              name="old_isle"
              value={this.state.old_isle}
              onChange={this.handleChange}
            />
          </label>
          <label>
            NEW AISLE:
            <input
              type="number"
              name="new_isle"
              value={this.state.new_isle}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default ProteinForm;

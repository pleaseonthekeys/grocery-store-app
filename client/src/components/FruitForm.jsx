import React from "react";

class FruitForm extends React.Component {
  constructor(props) {
    super(props);
    //this state is defined by my api's post requirements
    this.state = {
      isle: 2, //isle
      name: "", //name
      type: "fruit",
      old_isle: 0,
      new_isle: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIsleChangeSubmit = this.handleIsleChangeSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); //again, why this? in the case of onchage.. defaukt is nothing, so e need to change that default...default action is to make request, we dont want tthat

    const { isle, name, type } = this.state;

    let fruit = {
      isle: isle,
      name: name,
      type: type
    };

    this.props.addFruit(fruit);
  }

  handleInputChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  handleIsleChangeSubmit(event) {
    event.preventDefault();

    const { name, type, new_isle, old_isle } = this.state;

    //I know I can use object short hand here because my keynames match value variable names... will do...
    let fruit = {
      name: name,
      type: type,
      new_isle: new_isle,
      old_isle: old_isle
    };

    this.props.updateFruitIsle(fruit);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          FOOD NAME:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          isle NUMBER:{" "}
          <input
            type="number"
            name="isle"
            value={this.state.isle}
            onChange={this.handleInputChange}
          />
          FOOD TYPE:{" "}
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleIsleChangeSubmit}>
          OLD AISLE:{" "}
          <input
            type="number"
            name="old_isle"
            value={this.state.old_isle}
            onChange={this.handleInputChange}
          />
          NEW AISLE:{" "}
          <input
            type="number"
            name="new_isle"
            value={this.state.new_isle}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FruitForm;

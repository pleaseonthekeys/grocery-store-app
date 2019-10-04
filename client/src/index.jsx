import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FruitList from "./components/FruitList.jsx";
import FruitForm from "./components/FruitForm.jsx";
import GreensList from "./components/GreensList.jsx";
import GreensForm from "./components/GreensForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [],
      vegetables: []
    };

    this.getFruit = this.getFruit.bind(this);
    this.addFruits = this.addFruits.bind(this);
    this.updateFruitIsle = this.updateFruitIsle.bind(this);
    this.getGreens = this.getGreens.bind(this);
    this.addGreens = this.addGreens.bind(this);
  }

  componentDidMount() {
    console.log("mounted and communicating");
    this.getFruit();
    this.getGreens();
  }

  getFruit() {
    return axios
      .get("/fruit")
      .then(({ data }) => {
        this.setState({ fruits: data }, () => {});
      })
      .catch(err => console.log("error getting test fruit", err));
  }

  addFruits(fruit) {
    return axios
      .post("/fruit", fruit)
      .then(() => {
        return this.getFruit();
      })
      .catch(err => {
        console.log("error posting fruit", err);
      });
  }

  updateFruitIsle(fruit) {
    return axios
      .put("/fruit", fruit)
      .then(() => {
        return this.getFruit();
      })
      .catch(err => {
        console.log("error changing fruit isle", err);
      });
  }

  getGreens() {
    return axios
      .get("/greens")
      .then(({ data }) => {
        this.setState({ vegetables: data }, () => {});
      })
      .catch(err => console.log("error getting greens", err));
  }

  addGreens(veggies) {
    return axios
      .post("/greens", veggies)
      .then(() => {
        return this.getGreens();
      })
      .catch(err => {
        console.log("error posting greens", err);
      });
  }

  render() {
    return (
      <div>
        <h1>Rendering Anything</h1>
        <FruitForm
          addFruit={this.addFruits}
          updateFruitIsle={this.updateFruitIsle}
        />
        <FruitList fruits={this.state.fruits} getFruit={this.getFruit} />
        <GreensForm
          addGreens={this.addGreens}
          updateGreensIsle={this.updateGreensIsle}
        />
        <GreensList
          vegetables={this.state.vegetables}
          getGreens={this.getGreens}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

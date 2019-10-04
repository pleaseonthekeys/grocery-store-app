import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FruitList from "./components/FruitList.jsx";
import FruitForm from "./components/FruitForm.jsx";
import GreensList from "./components/GreensList.jsx";
import GreensForm from "./components/GreensForm.jsx";
import ProteinList from "./components/ProteinList.jsx";
import ProteinForm from "./components/ProteinForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [],
      vegetables: [],
      proteinArr: []
    };

    //fruit requests
    this.getFruit = this.getFruit.bind(this);
    this.addFruits = this.addFruits.bind(this);
    this.updateFruitIsle = this.updateFruitIsle.bind(this);

    //vegetable requests
    this.getGreens = this.getGreens.bind(this);
    this.addGreens = this.addGreens.bind(this);
    this.updateGreensIsle = this.updateGreensIsle.bind(this);

    //protein requests
    this.getProtein = this.getProtein.bind(this);
    this.addProtein = this.addProtein.bind(this);
    this.updateProteinIsle = this.updateProteinIsle.bind(this);
  }

  componentDidMount() {
    console.log("mounted and communicating");
    this.getFruit();
    this.getGreens();
    this.getProtein();
  }

  //fruit requests
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

  //vegetable requests
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

  updateGreensIsle(vegetable) {
    return axios
      .put("/greens", vegetable)
      .then(() => {
        return this.getGreens();
      })
      .catch(err => {
        console.log("error updating greens aisle", err);
      });
  }

  //protein requests: need to map through protein array to render
  getProtein() {
    return axios
      .get("/protein")
      .then(({ data }) => {
        this.setState({ proteinArr: data });
      })
      .catch(err => {
        console.log("error getting protein", err);
      });
  }

  addProtein(proteinItem) {
    return axios
      .post("/protein", proteinItem)
      .then(() => {
        console.log("protein has been added to the store");
        this.getProtein();
      })
      .catch(err => {
        console.log("error adding new Protein", err);
      });
  }

  updateProteinIsle(proteinWihtNewAisle) {
    return axios
      .put("/protein", proteinWihtNewAisle)
      .then(() => {
        console.log("successfully updated aisle");
        this.getProtein();
      })
      .catch(err => {
        console.log("error updating protein aisle", err);
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Grocery Store! Let's Stock Some Food: </h1>
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
        <ProteinForm
          addProtein={this.addProtein}
          updateProteinIsle={this.updateProteinIsle}
        />
        <ProteinList
          protein={this.state.proteinArr}
          getProtein={this.getProtein}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

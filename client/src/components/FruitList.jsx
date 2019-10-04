import React from "react";
import FruitItem from "./FruitItem.jsx";

//functional components don't use THIS!!
const h4Style = {
  color: "red"
};
const FruitList = props => (
  <div>
    <h4 style={h4Style}>Fruit List</h4>
    <ul>
      {props.fruits.map(fruit => {
        return <FruitItem fruit={fruit} getFruit={props.getFruit} />;
      })}
    </ul>
  </div>
);

export default FruitList;

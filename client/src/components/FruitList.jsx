import React from "react";
import FruitItem from "./FruitItem.jsx";

//functional components don't use THIS!!
const FruitList = props => (
  <div>
    <h4>Fruit List</h4>
    <ul>
      {props.fruits.map(fruit => {
        // const liStyle = {
        //   color: "blue"
        // };
        return <FruitItem fruit={fruit} getFruit={props.getFruit} />;
      })}
    </ul>
  </div>
);

export default FruitList;

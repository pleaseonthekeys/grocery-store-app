import React from "react";
import GreenItem from "./GreenItem.jsx";

//functional components don't use THIS!!
const h4Style = {
  color: "green"
};
const GreensList = props => (
  <div>
    <h4 style={h4Style}>Vegetable List</h4>
    <ul>
      {props.vegetables.map(vegetable => {
        return <GreenItem vegetable={vegetable} getGreens={props.getGreens} />;
      })}
    </ul>
  </div>
);

export default GreensList;

import React from "react";
import GreenItem from "./GreenItem.jsx";

//functional components don't use THIS!!
const GreensList = props => (
  <div>
    <h4>Vegetable List</h4>
    <ul>
      {props.vegetables.map(vegetable => {
        // const liStyle = {
        //   color: "blue"
        // };
        return <GreenItem vegetable={vegetable} getGreens={props.getGreens} />;
      })}
    </ul>
  </div>
);

export default GreensList;
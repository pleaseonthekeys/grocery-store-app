import React from "react";
import ProteinItem from "./ProteinItem";
//when are the brackets after the arrow round brackets vs. curly?
const ProteinList = props => (
  <div>
    <h4>Protein List</h4>
    <ul>
      {props.protein.map(proteinItem => {
        return (
          <ProteinItem
            proteinItem={proteinItem}
            getProtein={props.getProtein}
          />
        );
      })}
    </ul>
  </div>
);

export default ProteinList;

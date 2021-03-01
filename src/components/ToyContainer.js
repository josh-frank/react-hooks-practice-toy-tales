import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { allToys } ) {
  return (
    <div id="toy-collection">
      { allToys.map( toy => <ToyCard key={ toy.id } toy={ toy }/> ) }
    </div>
  );
}

export default ToyContainer;

import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { allToys, setToys } ) {
  return (
    <div id="toy-collection">
      { allToys.map( toy => <ToyCard key={ toy.id } toy={ toy } allToys={ allToys } setToys={ setToys }/> ) }
    </div>
  );
}

export default ToyContainer;

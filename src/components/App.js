import React, { useState, useEffect } from "react";

import APIUrl from "./APIUrl";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [ showForm, setShowForm ] = useState( false );
  const [ toys, setToys ] = useState( [] );

  useEffect( () => {
    fetch( APIUrl ).then( response => response.json() ).then( setToys );
  }, [] );

  // console.log( toys );

  function handleClick() {
    setShowForm( showForm => !showForm );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm allToys={ toys } setToys={ setToys }/> : null}
      <div className="buttonContainer">
        <button onClick={ handleClick }>Add a Toy</button>
      </div>
      <ToyContainer allToys={ toys }/>
    </>
  );

}

export default App;

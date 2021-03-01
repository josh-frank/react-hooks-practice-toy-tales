import React, { useState } from "react";
import APIUrl from "./APIUrl";

function ToyForm( { allToys, setToys } ) {

  const [ toyFormState, setToyFormState ] = useState( { name: "", image: "" } );

  function updateToyFormState( toyFormChangeEvent ) {
    const updatedToyFormState = { ...toyFormState };
    updatedToyFormState[ toyFormChangeEvent.target.name ] = toyFormChangeEvent.target.value;
    setToyFormState( updatedToyFormState );
  }

  function addToy( toyFormSubmitEvent ) {
    toyFormSubmitEvent.preventDefault();
    fetch( APIUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( { name: toyFormState.name, image: toyFormState.image, likes: 0 } )
    } ).then( response => response.json() ).then( newToy => {
      setToys( [ ...allToys, newToy ] );
      setToyFormState( { name: "", image: "" } );
    } );
  }

  // console.log( toyFormState );

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={ addToy }>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={ toyFormState.name }
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={ updateToyFormState }
          />
        <br />
        <input
          type="text"
          name="image"
          value={ toyFormState.image }
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={ updateToyFormState }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );

}

export default ToyForm;

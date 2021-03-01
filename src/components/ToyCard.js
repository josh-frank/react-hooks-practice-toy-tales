import React from "react";
import APIUrl from "./APIUrl";

function ToyCard( { toy, allToys, setToys } ) {

  function likeToy() {
    fetch( `${ APIUrl }/${ toy.id }`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( { likes: toy.likes + 1 } )
    } ).then( response => response.json() ).then( likedToy => {
      const updatedToys = [ ...allToys ];
      updatedToys.find( whichToy => whichToy.id === likedToy.id ).likes++;
      setToys( updatedToys );
    } );
  }
  
  function donateToy() {
    fetch( `${ APIUrl }/${ toy.id }`, { method: "DELETE" } );
    const updatedToys = allToys.filter( eachToy => eachToy.id !== toy.id );
    setToys( updatedToys );
  }

  return (
    <div className="card">
      <h2>{ toy.name }</h2>
      <img
        src={ toy.image }
        alt={ toy.name }
        className="toy-avatar"
      />
      <p>{ toy.likes } Likes </p>
      <button className="like-btn" onClick={ likeToy }>Like {"<3"}</button>
      <button className="del-btn" onClick={ donateToy }>Donate to GoodWill</button>
    </div>
  );

}

export default ToyCard;

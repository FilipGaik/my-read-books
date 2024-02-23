import React from "react";

export default function Book(props) {
  return (
    <div className="RegLogMenu">
      <h4>{props.title} by {props.author}</h4>
      <p>{props.description}</p>
      <button id={props.id} className="login">Edit</button>
    </div>
  );
}
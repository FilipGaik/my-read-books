import React from "react";

export default function Book(props) {
  return (
    <div className="RegLogMenu">
      <h4>{props.title} by {props.author}</h4>
      <p id={"paragraph" + props.id}>{props.description}</p>
      <textarea rows="8" cols="50" id={"input" + props.id} type="text" autoComplete="off" autoFocus={true} hidden={true} onChange={props.updateDescription} />
      <br id={"br" + props.id} hidden={true} />
      <button id={"edit" + props.id} className="login" onClick={(e) => {
          document.getElementById("paragraph" + props.id).setAttribute("hidden", true);
          document.getElementById("edit" + props.id).setAttribute("hidden", true);
          document.getElementById("input" + props.id).removeAttribute("hidden");
          document.getElementById("br" + props.id).removeAttribute("hidden");
          document.getElementById("save" + props.id).removeAttribute("hidden");

          const description = document.getElementById("paragraph" + props.id).innerText;
          
          document.getElementById("input" + props.id).value = description;
          props.setUpdatedDescription(description);
          e.preventDefault();
        }}>Edit</button>
      <button id={"save" + props.id} className="login" hidden={true} onClick={(e) => {
          props.saveUpdatedDescription(e);
          e.preventDefault();
        }}>Save</button>
    </div>
  );
}

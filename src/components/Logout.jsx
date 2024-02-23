import React, { useState } from "react";

export default function Logout(props) {
  return (
    <div className="RegLogMenu">
      <button className="login" onClick={(e) => {
        props.handleLogout();
        e.preventDefault();
      }}>Log out</button>
    </div>
  );
}
import React from "react";

export default function RegistrationLoginMenu() {
  return (
    <div className="RegLogMenu">
      <p>Do you <strong>love</strong> reading <strong>books</strong>?</p>
      <p>Use this <strong>site</strong> to wright down your <strong>thoughts</strong> about books you have read.</p>
      <p>Register for <strong>free</strong> or login if you have an account already.</p>
      <form>
        <input type="email" placeholder="Email"></input>
        <br />
        <input type="password" placeholder="Password"></input>
        <br />
        <button type="submit" id="login">Log in</button>
        <br />
        <button type="submit" id="register">Register</button>
      </form>
    </div>
  );
}
import React, { useState } from "react";

export default function RegistrationLoginMenu(props) {
  const [user, setUser] = useState({email: "", password: ""});

  function changeHandler(e) {
    const {name, value} = e.target;

    setUser((previousValue) => ({...previousValue, [name]: value}));
  }

  return (
    <div className="RegLogMenu">
      <p>Do you <strong>love</strong> reading <strong>books</strong>?</p>
      <p>Use this <strong>site</strong> to wright down your <strong>thoughts</strong> about books you have read.</p>
      <p>Register for <strong>free</strong> or login if you have an account already.</p>

      <form>
        <input type="email" name="email" placeholder="Email" required autoFocus autoComplete="on" onChange={changeHandler} value={user.email}></input>
        <br />
        <input type="password" name="password" placeholder="Password" required onChange={changeHandler} value={user.password}></input>
        <br />
        <button type="submit" onClick={(e) => {
          props.handleLogin(user);
          e.preventDefault();
        }} className="login">Log in</button>
        <br />
        <button type="submit" onClick={(e) => {
          props.handleRegister(user);
          e.preventDefault();
        }} className="register">Register</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationLoginMenu from "./RegistrationLoginMenu";
import Books from "./Books";
import axios from "axios";

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  async function handleRegister(user) {
    if(user.email === "" || user.password === "") {
      alert("Please fulfill both fields.");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/register", user, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

        if(response.data === "OK") {
          setLoggedUser(user.email);
        } else {
          alert("Email already exists. Try logging in.");
        }
      } catch(error) {
        console.log(error);
      }
    }
  }

  function handleLogout() {
    setLoggedUser("");
  }

  return (
    <div>
      <Header />
      {loggedUser === "" && <RegistrationLoginMenu handleRegister={handleRegister} />}
      {loggedUser !== "" && <Books handleLogout={handleLogout} />}
      <Footer />
    </div>
  );
}

export default App;

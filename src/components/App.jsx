import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationLoginMenu from "./RegistrationLoginMenu";

function App() {
  let isAuthenticated = false;

  return (
    <div>
      <Header />
      {!isAuthenticated && <RegistrationLoginMenu />}
      <Footer />
    </div>
  );
}

export default App;
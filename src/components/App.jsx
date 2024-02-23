import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationLoginMenu from "./RegistrationLoginMenu";
import Logout from "./Logout";
import Book from "./Book";
import Form from "./Form";
import axios from "axios";

export default function App() {
  const [loggedUser, setLoggedUser] = useState("");
  const [books, setBooks] = useState([]);

  async function handleLogin(user) {
    if(user.email === "" || user.password === "") {
      alert("Please fulfill both fields.");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/login", user, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

        if(response.data === "NOK") {
          alert("Email not registered. Please register first.");
        } else if(response.data === "NOK password") {
          alert("Wrong password, please try again.");
        } else {
          setLoggedUser(user.email);
          getBooks(user.email);
        }
      } catch(error) {
        console.log(error);
      }
    }
  }

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

  async function addNewBook(book) {
    if(book.title === "" || book.author === "" || book.description === "") {
      alert("Please fulfill all fields.");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/addBook", {title: book.title, author: book.author, description: book.description, email: loggedUser}, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        if(response.data === "NOK") {
          alert("Something went wrong, please try again.");
        } else {
          alert("Book added!");
          setBooks((previousValue) => ([...previousValue, {title: book.title, author: book.author, description: book.description, id: response.data.id}]));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getBooks(email) {
    try {
      const response = await axios.post("http://localhost:5000/getBooks", {email: email}, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
      setBooks([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      {loggedUser === "" && <RegistrationLoginMenu handleRegister={handleRegister} handleLogin={handleLogin} />}
      {loggedUser !== "" && <div><Logout handleLogout={handleLogout} />{books.map(book => <Book key={book.id} title={book.title} author={book.author} description={book.description} id={book.id} />)}<Form addNewBook={addNewBook} /></div>}
      <Footer />
    </div>
  );
}

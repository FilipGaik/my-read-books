import React, { useState } from "react";

export default function Form(props) {
  const [book, setBook] = useState({title: "", author: "", description: ""});

  function changeBookHandler(e) {
    const {name, value} = e.target;

    setBook((previousValue) => ({...previousValue, [name]: value}));
  }

  return (
    <div className="RegLogMenu">
      <form>
        <label for="title">Title:</label>
        <br />
        <input id="title" type="text" name="title" placeholder="Title" required onChange={changeBookHandler} value={book.title}></input>
        <br />
        <label for="author">Author:</label>
        <br />
        <input id="author" type="text" name="author" placeholder="Author" required onChange={changeBookHandler} value={book.author}></input>
        <br />
        <label for="description">Description:</label>
        <br />
        <textarea id="description" name="description" rows="8" cols="50" placeholder="Description" required onChange={changeBookHandler} value={book.description}></textarea>
        <br />
        <button type="submit" className="login" onClick={(e) => {
          props.addNewBook(book);
          setBook((previousValue) => ({...previousValue, title: "", author: "", description: ""}));
          e.preventDefault();
        }}>Add new book</button>
      </form>
    </div>
  );
}
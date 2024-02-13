import React from "react";

export default function Books(props) {
  return (
    <div className="RegLogMenu">
      <button className="login" onClick={(e) => {
        props.handleLogout();
        e.preventDefault();
      }}>Log out</button>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Start date</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>God Delusion</td>
            <td>Richard Dawkins</td>
            <td>Very good book</td>
            <td>01.10.2023</td>
            <td>09.02.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
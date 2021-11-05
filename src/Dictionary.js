import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DicstionarySearch">
      <form className="Search" onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />{" "}
        <button value="Search">Search</button>
      </form>
    </div>
  );
}

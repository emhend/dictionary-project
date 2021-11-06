import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="DictionarySearch">
        <form className="Search" onSubmit={handleSubmit}>
          <input
            placeholder="Type a word..."
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />{" "}
          <button value="Search">Search</button>
        </form>
        <div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}

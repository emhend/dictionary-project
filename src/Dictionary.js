import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001c38ffc41cd56466fae6770db30d3eb5b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
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
        <div>
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}

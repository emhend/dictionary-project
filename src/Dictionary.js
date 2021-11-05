import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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

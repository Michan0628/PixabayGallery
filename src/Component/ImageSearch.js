import React, { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
const handleSubmit =(e)=>{
    e.preventDefault();
    searchText(text);
}
  return (
    <div className="search__container">
      <form onSubmit={handleSubmit} action="" className="search__form">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="search__input"
          spaceholder="Search image tag"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
}

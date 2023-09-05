import { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import { useNavigate } from "react-router-dom";
import { BiSolidSearchAlt2 } from "react-icons/bi";

export const SearchBar = () => {
  const [selected, setSelected] = useState("home");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Search:", search)
  }, [search]);

  function handleTextEntry(value: string) {
    setSearch(value);
  }

  function handleKeyPress(key: string) {
    if (key === "Enter") {
      submitSearch();
    }
  }



  function submitSearch() {
    console.log("Search Submitted:", search);
  }

  return (
    <div className="searchbar-container">
      <div className="search-area">
        <input
          className="searchbar-input"
          placeholder="Search products"
          type="text"
          value={search}
          onChange={(e) => handleTextEntry(e.target.value)}
          onKeyDown={(e) => {handleKeyPress(e.key)}}
        />
      </div>
      <div 
        className="search-button"
        onClick={() => submitSearch()}
      >
        <BiSolidSearchAlt2 
          style={{ fontSize: "25px" }}
        />
      </div>
    </div>
  )
}

import React from "react";
import Books from "./Books.jsx";
import SearchBar from "./SearchBar.jsx";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <Books />
    </div>
  );
};

export default HomePage;

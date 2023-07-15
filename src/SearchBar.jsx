import React from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for books"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;

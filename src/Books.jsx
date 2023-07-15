import React, { useEffect, useState } from "react";
import { GoogleBooksAPI } from "google-books-js";
import "./index.css";

const Books = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const api = new GoogleBooksAPI({
    key: "AIzaSyCJH3VI8VhqeMJWUi3Sup1e_2gHWiux_BI",
  });

  //   const books = api.search(searchTerm, { maxResults: 5 });
  async function fetchBooks() {
    console.log("Entered into FetchBooks");
    const books = await api.search({
      filters: {
        title: "Physics",
        maxResults: 2,
      },
    });
    // const book = {id:book.id,title:book.title}
    const data = books.items;
    // setBooks((books.items)=>{return [...books, book]})
    // console.log("Books : ",books.items);
    // const book = {id:book.id,title:book.title}
    setData(data);
    console.log("data", data);
  }

  return (
    <>
      <button
        onClick={() => {
          fetchBooks();
        }}
      >
        Search
      </button>
      <h1>Books</h1>
      <div class="grid-container">
        {data?.map((book) => (
          <div key={book.id}>
            {console.log(book.id)}

            <div className="partialGrid">
              {/* <h4>Description : {book.volumeInfo.description}</h4><br/> */}
              <img
                className="img"
                src={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail
                }
              />
            </div>
            <h3>
              Title <br /> {book.volumeInfo.title}
            </h3>
            <h4>Author : {book.volumeInfo.authors}</h4>
            {console.log(book.kind)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Books;

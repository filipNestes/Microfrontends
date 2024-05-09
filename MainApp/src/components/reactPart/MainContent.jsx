import React, { useState } from "react";
import { sendData } from "../../api";
import "./mainContent.scss";

const MyComponent = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("books");

  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const bookData = { title, author, genre };
    try {
      await sendData(category, bookData);
      alert("Data sent successfully!");
      setTitle("");
      setAuthor("");
      setGenre("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMovieSubmit = async (event) => {
    event.preventDefault();
    const movieData = { name, director, genre: movieGenre };
    try {
      const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
      existingMovies.push(movieData);
      localStorage.setItem("movies", JSON.stringify(existingMovies));
      alert("Movie data added successfully!");
      setName("");
      setDirector("");
      setMovieGenre("");
    } catch (error) {
      alert("Failed to save the movie data.");
    }
  };

  return (
    <>
      <div className="main-content">
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="#61dafb"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
          wiid="N153"
        >
          <circle cx="0" cy="0" r="2" fill="#61dafb" wiid="N154"></circle>
          <g stroke="#61dafb" strokeWidth="1" fill="none" wiid="N155">
            <ellipse rx="10" ry="4.5" wiid="N156"></ellipse>
            <ellipse
              rx="10"
              ry="4.5"
              transform="rotate(60)"
              wiid="N157"
            ></ellipse>
            <ellipse
              rx="10"
              ry="4.5"
              transform="rotate(120)"
              wiid="N158"
            ></ellipse>
          </g>
        </svg>
        <span>REACT</span>
      </div>
      <form onSubmit={handleBookSubmit} className="book-form">
        <h2>Book Section</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Book Title"
          className="input-field"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author Name"
          className="input-field"
        />
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          placeholder="Genre"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Add Book via Node Server
        </button>
      </form>

      <form
        onSubmit={handleMovieSubmit}
        className="movie-form"
        style={{ marginTop: "2rem" }}
      >
        <h2>Movie Section</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Movie Name"
          className="input-field"
        />
        <input
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          type="text"
          placeholder="Director Name"
          className="input-field"
        />
        <input
          value={movieGenre}
          onChange={(e) => setMovieGenre(e.target.value)}
          type="text"
          placeholder="Genre"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Add Movie via LocalStorage
        </button>
      </form>
    </>
  );
};

export default MyComponent;

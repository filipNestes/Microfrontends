<template>
  <div class="vueMf">
    <div class="vueMf-title">
      <svg
        class="logo"
        viewBox="0 0 128 128"
        width="32"
        height="32"
        data-v-224d45d0=""
      >
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          data-v-224d45d0=""
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          data-v-224d45d0=""
        ></path>
      </svg>
      <span> Vue.js </span>
    </div>
    <div class="vueMf-table">
      <header>
        <h2>Books</h2>
        <button @click="deleteAllBooks" class="delete-all-btn">
          🗑️ Delete All Books
        </button>
      </header>
      <table v-if="books.length">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.genre }}</td>
            <td><button @click="deleteBook(index)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      <p v-else>No data available.</p>

      <header>
        <h2>Movies</h2>
        <button @click="deleteAllMovies" class="delete-all-btn">
          🗑️ Delete All Movies
        </button>
      </header>
      <table v-if="movies.length">
        <thead>
          <tr>
            <th>Name</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in movies" :key="index">
            <td>{{ movie.name }}</td>
            <td>{{ movie.director }}</td>
            <td>{{ movie.genre }}</td>
            <td><button @click="deleteMovie(index)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      <p v-else>No movies available.</p>
    </div>
  </div>
</template>

<script>
import DataService from "./DataService";

export default {
  name: "Content",

  data() {
    return {
      books: [],
      movies: JSON.parse(localStorage.getItem("movies") || "[]"),
    };
  },
  methods: {
    async deleteBook(index) {
      await DataService.deleteData("books", index);
      this.books.splice(index, 1);
    },
    async deleteAllBooks() {
      await DataService.deleteAllData("books");
      this.books = [];
    },
    deleteMovie(index) {
      this.movies.splice(index, 1);
      localStorage.setItem("movies", JSON.stringify(this.movies));
    },
    deleteAllMovies() {
      localStorage.removeItem("movies");
      this.movies = [];
    },
    async fetchBooks() {
      const response = await DataService.fetchData("books");
      this.books = response.data;
    },
    fetchMovies() {
      this.movies = JSON.parse(localStorage.getItem("movies") || "[]");
    },
  },
  mounted() {
    this.fetchBooks();
    this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
.vueMf {
  .vueMf-title {
    background-color: #80cd88;
    color: #484848;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0.5rem;
      width: 3rem;
      height: 3rem;
    }

    span {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Inter var experimental", "Inter var", Inter, -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      color: #35495e;
    }
  }
  .vueMf-table {
    display: block;
    margin: 20px;
    font-family: Arial, sans-serif;
    margin-bottom: 1rem;
    font-size: 18px;

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      margin-top: 3rem;
      font-family: Arial, sans-serif;

      h2 {
        color: #333;
        font-size: 24px;
        margin: unset;
        width: 100%;
        text-align: center;
      }

      .delete-all-btn {
        padding: 6px 12px;
        color: #fff;
        background-color: #dc3545;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin-left: auto;
        width: 11rem;

        &:hover {
          background-color: #c82333;
        }
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;

      thead {
        tr {
          background-color: #2c3e50;

          th {
            font-weight: bold;
            color: #fff;
            padding: 10px;
            border: 1px solid #ddd;
            width: 30%;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(odd) {
            background-color: #f9f9f9;
          }

          &:nth-child(even) {
            background-color: #919191;
          }

          td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
            font-weight: bold;

            &:last-child {
              text-align: center;
            }
          }
        }
      }
    }

    button {
      padding: 6px 12px;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }

    p {
      font-size: 16px;
      color: #666;
    }
  }
}
</style>

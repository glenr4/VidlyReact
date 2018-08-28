import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    const { length: movieCount } = this.state.movies;

    if (movieCount === 0) {
      return <p>There are no movies in the database</p>;
    }

    return (
      <React.Fragment>
        <p>There are {movieCount} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
}

export default Movies;

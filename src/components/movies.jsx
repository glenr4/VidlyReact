import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like/like";
import Pagination from "./common/pagination/pagination";
import { paginate } from "./common/paginate/paginate";
import PropTypes from "prop-types";
import ListGroup from "./common/listGroup/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  render() {
    const { length: movieCount } = this.state.movies;

    if (movieCount === 0) {
      return <p>There are no movies in the database</p>;
    }

    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              textProperty="name"
              valueProperty="_id"
            />
          </div>
          <div className="col">
            <p>There are {movieCount} movies in the database</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {movies.map(m => (
                  <tr key={m._id}>
                    <td>{m.title}</td>
                    <td>{m.genre.name}</td>
                    <td>{m.numberInStock}</td>
                    <td>{m.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={m.liked}
                        onLikeClick={() => this.handleLike(m)}
                      />
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

            <Pagination
              itemsCount={movieCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChanged={this.handlePageChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleDelete(movie) {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  }

  handlePageChanged = pageNum => {
    this.setState({ currentPage: pageNum });
  };

  handleGenreSelect = genre => {
    console.log("selectedgenre", genre);
  };
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired
};

export default Movies;

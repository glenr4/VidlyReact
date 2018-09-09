import React, { Component } from "react";
import Like from "../like/like";

class MoviesTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.movies.map(m => (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
              <td>
                <Like
                  liked={m.liked}
                  onLikeClick={() => this.props.onLike(m)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(m)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  raiseSort = path => {
    let order;
    if (this.props.sortColumn.path === path) {
      order = this.props.sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      order = "asc";
    }

    this.props.onSort({ path, order });
  };
}

export default MoviesTable;

import React, { Component } from "react";
import TableHeader from "../common/tableHeader/tableHeader";
import TableBody from "../common/tableBody/tableBody";
import Like from "../like/like";

class MoviesTable extends Component {
  columns = [
    { title: "Title", path: "title" },
    { title: "Genre", path: "genre.name" },
    { title: "Stock", path: "numberInStock" },
    { title: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onLikeClick={() => this.props.onLike(movie)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
        />
        <TableBody
          items={this.props.movies}
          columns={this.columns}
          onLike={this.props.onLike}
          onDelete={this.props.onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;

import React from "react";
import Like from "../like/like";

const MoviesTable = props => {
  let { movies, onDelete, onLike } = props;

  if (!movies) movies = [];

  return (
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
              <Like liked={m.liked} onLikeClick={() => onLike(m)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(m)}
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
};

export default MoviesTable;

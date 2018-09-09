import React, { Component } from "react";
import TableHeader from "../common/tableHeader/tableHeader";
import TableBody from "../common/tableBody/tableBody";

class MoviesTable extends Component {
  render() {
    return (
      <table className="table">
        <TableHeader
          columns={this.props.columns}
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
        />
        <TableBody
          items={this.props.movies}
          columns={this.props.columns}
          onLike={this.props.onLike}
          onDelete={this.props.onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;

import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
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

export default TableHeader;

import React, { Component } from "react";
import lodash from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    } else {
      return lodash.get(item, column.path);
    }
  };

  render() {
    return (
      <tbody>
        {this.props.items.map(item => (
          <tr key={item._id}>
            {this.props.columns.map(column => (
              <td key={item._id + (column.path || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

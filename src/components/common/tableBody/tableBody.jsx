import React, { Component } from "react";
import Like from "../../like/like";
import lodash from "lodash";

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.items.map(item => (
          <tr key={item._id}>
            {this.props.columns.map(column => (
              <td key={item._id + (column.path || column.key)}>
                {lodash.get(item, column.path)}
              </td>
            ))}
            {/* <td>
                <Like
                  liked={item.liked}
                  onLikeClick={() => this.props.onLike(item)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(item)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td> */}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

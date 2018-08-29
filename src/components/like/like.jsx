import React, { Component } from "react";

class Like extends Component {
  render() {
    let className = "fa fa-heart";

    if (!this.props.liked) {
      className = "fa fa-heart-o";
    }

    return (
      <i
        className={className}
        onClick={this.props.onLikeClick}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;

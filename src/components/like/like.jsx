import React, { Component } from "react";

class Like extends Component {
  state = {
    liked: false
  };

  render() {
    if (this.state.liked) {
      return <i className="fa fa-heart" onClick={() => this.toggle()} />;
    } else {
      return <i className="fa fa-heart-o" onClick={() => this.toggle()} />;
    }
  }

  toggle() {
    this.setState({ liked: !this.state.liked });
  }
}

export default Like;

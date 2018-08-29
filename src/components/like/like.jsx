import React from "react";

// Stateless Function Component
const Like = props => {
  let className = "fa fa-heart";

  if (!props.liked) {
    className = "fa fa-heart-o";
  }

  return (
    <i
      className={className}
      onClick={props.onLikeClick}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;

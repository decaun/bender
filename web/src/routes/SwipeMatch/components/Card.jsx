import React from "react";

function Card({ zIndex = 0, children, url }) {
  const cardStyles = {
    //background: "url(https://picsum.photos/250)",
    background: `url(${url})`,
    borderRadius: 3,
    width: "450px",
    height: "450px",
    cursor: "pointer",
    userSelect: "none",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0
  };

  return <div style={{ ...cardStyles, zIndex }}>{children}</div>;
}

export default Card;

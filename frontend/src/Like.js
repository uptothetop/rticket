import React from "react";

function Like() {
  const [likes, setLikes] = React.useState(0);
  function onClickHandler() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={onClickHandler}>Likes: {likes}</button>
  );
}

export default Like;
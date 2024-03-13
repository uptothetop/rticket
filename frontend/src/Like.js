import React from "react";

function Like({likes, setLikes}) {
  return (
    <button onClick={setLikes}>Likes: {likes}</button>
  );
}

export default Like;
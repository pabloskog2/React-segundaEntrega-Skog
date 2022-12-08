import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";



const PostsId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  return (
    <div className="boxDetail">
      <p><strong>UserID:</strong> {character.userId}</p>
      <p><strong>Id:</strong> {character.id}</p>
      <p><strong>Title:</strong> {character.title}</p>
      <p><strong>Body:</strong> {character.body}</p>
    </div>
  );
};

export default PostsId;
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  return (
    <div className="">
      <h1>Listado Post JSON Placeholder</h1>
      {post.map(function(item) {
        return (
          <div key={item.id} className="cardsContainer m-3 ">
            <Card style={{ width: "20rem" }}>
              <Card.Body className="bg-card" style={{ height: "10rem" }}>
                <Card.Title >{item.id}</Card.Title>
                <Card.Text>{item.title}</Card.Text>
                <Button href={`/Posts/${item.id}`}>Link</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

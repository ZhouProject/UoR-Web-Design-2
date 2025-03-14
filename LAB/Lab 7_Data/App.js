import React, { useState, useEffect } from "react";
import './App.css';


// Json Placeholder API Docs 
// https://www.jsonplaceholder.org/
// https://jsonplaceholder.typicode.com/guide/


function App() {
  // logic
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
    .then(response => response.json())
    .then(data => setPosts(data.slice(0, 10)));
  }, []);

  const showPost = (post) => {
    setSelectedPost(post);
    fetch(`https://jsonplaceholder.org/comments?id=${post.id}`)
    .then(response => response.json())
    .then(data => setComments(data));
  };
  

  // To DOM
  return (
    <div>
      <h1> Simple Blog </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <button onClick={() => showPost(post)}>{post.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;

import React, { useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";
import PostForm from "src/components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', text: 'JavaScript — ЯП',},
    {id: 2, title: 'Java', text: 'Java — ЯП',},
    {id: 3, title: 'Python', text: 'Python — ЯП',},
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <Posts title="Список постов" posts={posts} />
    </div>
  );
}

export default App;

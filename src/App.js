import React, { useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', text: 'JavaScript — ЯП',},
    {id: 2, title: 'Java', text: 'Java — ЯП',},
    {id: 3, title: 'Python', text: 'Python — ЯП',},
  ]);

  return (
    <div className="App">
      <Posts title="Список постов" posts={posts} />
    </div>
  );
}

export default App;

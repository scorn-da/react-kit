import React, { useMemo, useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";
import PostForm from "src/components/PostForm/PostForm";
import PostsFilter from "src/components/PostsFilter/PostsFilter";
import ModalWithOverlay from "src/components/UI/Modal/ModalWithOverlay/ModalWithOverlay";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', text: 'JavaScript — ЯП',},
    {id: 2, title: 'Java', text: 'Java — ЯП',},
    {id: 3, title: 'Python', text: 'Python — ЯП',},
  ]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter, sortedPosts]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <hr style={{margin: '12px 0'}} />
      <ModalWithOverlay isActive={true}>
        <PostForm create={createPost} />
      </ModalWithOverlay>
      <PostsFilter filter={filter} setFilter={setFilter} />
      <Posts remove={removePost} title="Список постов" posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
